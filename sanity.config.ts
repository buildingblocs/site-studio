import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {media} from 'sanity-plugin-media'
import { singletonTools } from 'sanity-plugin-singleton-management'

export default defineConfig({
  name: 'default',
  title: 'Site',

  projectId: 'oovnxnpf',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), media(), singletonTools()],

  schema: {
    types: schemaTypes,
  },
})
