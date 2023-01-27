import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Nov Proekt',

  projectId: 'u158il37',
  dataset: 'production',

  plugins: [deskTool(), visionTool(),],

  schema: {
    types: schemaTypes,
  },
})
