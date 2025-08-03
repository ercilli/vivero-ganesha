#!/bin/bash

# Script de optimización de imágenes para Vivero Ganesha
# Convierte PNG grandes a WebP optimizado para web

echo "🚀 Iniciando optimización de imágenes para Vivero Ganesha..."

cd "$(dirname "$0")/public/img"

# Crear backup de originales si no existe
if [ ! -d "originals" ]; then
    echo "📁 Creando backup de imágenes originales..."
    mkdir originals
    cp *.png originals/ 2>/dev/null || true
fi

# Función para optimizar una imagen
optimize_image() {
    local file="$1"
    local name="${file%.*}"
    
    echo "🔄 Optimizando $file..."
    
    # Convertir a WebP con calidad 85 (excelente balance calidad/tamaño)
    cwebp -q 85 -m 6 -af "$file" -o "${name}.webp"
    
    # Crear también versión JPEG optimizada como fallback
    magick "$file" -quality 85 -strip -interlace Plane "${name}.jpg"
    
    # Redimensionar para diferentes breakpoints
    # Móvil (max-width: 640px)
    magick "$file" -resize "640x480>" -quality 85 -strip "${name}-mobile.jpg"
    cwebp -q 85 -resize 640 480 "$file" -o "${name}-mobile.webp"
    
    # Tablet (max-width: 1024px) 
    magick "$file" -resize "1024x768>" -quality 85 -strip "${name}-tablet.jpg"
    cwebp -q 85 -resize 1024 768 "$file" -o "${name}-tablet.webp"
    
    # Desktop (optimizado)
    magick "$file" -resize "1200x900>" -quality 85 -strip "${name}-desktop.jpg"
    cwebp -q 85 -resize 1200 900 "$file" -o "${name}-desktop.webp"
    
    # Crear thumbnail para lazy loading
    magick "$file" -resize "50x37>" -quality 60 -strip "${name}-thumb.jpg"
    cwebp -q 60 -resize 50 37 "$file" -o "${name}-thumb.webp"
    
    echo "✅ $file optimizado"
}

# Optimizar todas las imágenes PNG
for file in *.png; do
    if [ -f "$file" ]; then
        optimize_image "$file"
    fi
done

echo ""
echo "📊 Comparación de tamaños:"
echo "=========================="

total_original=0
total_optimized=0

for file in originals/*.png; do
    if [ -f "$file" ]; then
        name=$(basename "$file" .png)
        original_size=$(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)
        webp_size=$(stat -f%z "${name}.webp" 2>/dev/null || stat -c%s "${name}.webp" 2>/dev/null || echo "0")
        
        if [ "$webp_size" -gt 0 ]; then
            reduction=$(echo "scale=1; ($original_size - $webp_size) * 100 / $original_size" | bc -l 2>/dev/null || echo "0")
            echo "$name: $(numfmt --to=iec $original_size) → $(numfmt --to=iec $webp_size) (-${reduction}%)"
            
            total_original=$((total_original + original_size))
            total_optimized=$((total_optimized + webp_size))
        fi
    fi
done

if [ "$total_optimized" -gt 0 ]; then
    total_reduction=$(echo "scale=1; ($total_original - $total_optimized) * 100 / $total_original" | bc -l 2>/dev/null || echo "0")
    echo ""
    echo "🎯 TOTAL: $(numfmt --to=iec $total_original) → $(numfmt --to=iec $total_optimized)"
    echo "💾 Reducción total: ${total_reduction}%"
fi

echo ""
echo "🎉 ¡Optimización completada!"
echo "📝 Archivos generados:"
echo "  - .webp (formato moderno, mejor compresión)"
echo "  - .jpg (fallback para navegadores antiguos)"
echo "  - Versiones responsive: -mobile, -tablet, -desktop"
echo "  - Thumbnails para lazy loading: -thumb"
echo ""
echo "⚡ ¡Tu sitio ahora cargará mucho más rápido!"
