import type { GlobalConfig } from 'payload'

const HeaderConfig: GlobalConfig = {
  slug: 'header',
  label: 'Cabeçalho',
  fields: [
    {
      label: 'Menu de Navegação',
      name: "links",
      type: "array",
      fields: [
        {
          label: 'Texto',
          name: 'label',
          type: 'text',
        },
        {
          label: 'URL',
          name: 'url',
          type: 'text',
        },
      ]
    }
  ]
}

export default HeaderConfig