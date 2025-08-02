interface MetaTag {
  name?: string
  property?: string
  content: string
}

interface HeadOptions {
  title?: string
  meta?: MetaTag[]
}

export const useHead = (options: HeadOptions) => {
  // Set title
  if (options.title) {
    document.title = options.title
  }

  // Set meta tags
  if (options.meta) {
    options.meta.forEach(tag => {
      const selector = tag.name ? `meta[name="${tag.name}"]` : `meta[property="${tag.property}"]`
      let metaElement = document.querySelector(selector) as HTMLMetaElement
      
      if (!metaElement) {
        metaElement = document.createElement('meta')
        if (tag.name) {
          metaElement.name = tag.name
        } else if (tag.property) {
          metaElement.setAttribute('property', tag.property)
        }
        document.head.appendChild(metaElement)
      }
      
      metaElement.content = tag.content
    })
  }
}
