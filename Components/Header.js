export default {
  data() {
    return {
      menuActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    }
  },
  template: `
    <header>
      <nav>
        <div class="logo">Vivero Ganesha</div>
        <button class="menu-button" @click="toggleMenu">
          &#9776; <!-- Icono de menú hamburguesa -->
        </button>
        <div :class="['menu', { active: menuActive }]">
          <ul>
            <li><a href="./facturacion.html" class="about-button">Facturación</a></li>
            <li><a href="./stock.html" class="about-button">Inventario</a></li>
            <li><a href="./index.html" class="about-button">Producto</a></li>
            <li><a href="./proveedor.html" class="about-button">Proveedor</a></li>
            <li><a href="./cliente.html" class="about-button">Cliente</a></li>
            <li><a href="./venta.html" class="menu-button">Venta</a></li>
          </ul>
        </div>
      </nav>
    </header>
  `
};