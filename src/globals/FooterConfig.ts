import type { GlobalConfig } from 'payload'

const FooterConfig: GlobalConfig = {
  slug: 'footer',
  label: 'Rodapé',
  fields: [
    {
      label: 'Menus de Navegação',
      name: "menus",
      type: "array",
      required: true,
      minRows: 1,
      fields: [
        {
          label: 'Título',
          name: 'title',
          required: true,
          type: 'text'
        },
        {
          label: 'Links',
          name: 'links',
          type: 'array',
          required: true,
          minRows: 1,
          fields: [
            {
              label: 'Texto',
              required: true,
              name: 'label',
              type: 'text',
            },
            {
              label: 'URL',
              name: 'url',
              required: true,
              type: 'text',
              validate: (value: string | null | undefined) => {
                if (!value) return 'URL obrigatória'
                if (!value.startsWith('/')) return 'Deve ser uma URL interna (ex: /programas)'
                return true
              }
            },
          ]
        }
      ]
    }
  ]
}

export default FooterConfig