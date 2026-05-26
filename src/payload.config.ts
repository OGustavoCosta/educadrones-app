import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { nodemailerAdapter } from '@payloadcms/email-nodemailer'

/* COLEÇÕES */
import { Users } from './collections/Users'
import { Media } from './collections/Media'

/* GLOBAIS */
import FooterConfig from './globals/FooterConfig'
import HeaderConfig from './globals/HeaderConfig'

/* LINIGUAGENS */
import { pt } from '@payloadcms/translations/languages/pt'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  i18n: {
    fallbackLanguage: 'pt',
    supportedLanguages: { pt },
  },
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  globals: [HeaderConfig, FooterConfig],
  email: nodemailerAdapter({
    defaultFromAddress: '123gustaf321@gmail.com',
    defaultFromName: 'Educa Drones',
    transportOptions: {
      host: process.env.EMAIL_SMTP_HOST,
      port: 587,
      auth: {
        user: process.env.EMAIL_REMETENTE,
        pass: process.env.EMAIL_SENHA
      }
    }
  }),
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [],
})
