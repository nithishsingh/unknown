import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    'about-sections': collection({
      label: 'About Page Sections',
      slugField: 'title',
      path: 'src/content/about/*',
      schema: {
        title: fields.slug({ name: { label: 'Section Title' } }),
        subtitle: fields.text({ 
          label: 'Section Subtitle',
          validation: { length: { min: 1 } }
        }),
        description: fields.text({ 
          label: 'Description',
          multiline: true,
          validation: { length: { min: 10 } }
        }),
        icon: fields.text({ 
          label: 'Lucide Icon Name',
          description: 'Icon name from Lucide icons (e.g., "shield-check", "users")'
        }),
        order: fields.integer({ 
          label: 'Display Order',
          defaultValue: 0,
          validation: { isRequired: true }
        }),
        image: fields.image({
          label: 'Section Image',
          directory: 'public/images/about',
          publicPath: '/images/about/'
        }),
        stats: fields.array(
          fields.object({
            label: fields.text({ label: 'Stat Label' }),
            value: fields.text({ label: 'Stat Value' }),
            icon: fields.text({ 
              label: 'Stat Icon',
              description: 'Lucide icon name for this stat'
            })
          }),
          {
            label: 'Statistics',
            itemLabel: props => props.fields.label.value
          }
        ),
        content: fields.markdoc({
          label: 'Content',
          formatting: true,
          links: true,
          images: true
        })
      }
    }),
    'team-members': collection({
      label: 'Team Members',
      slugField: 'name',
      path: 'src/content/team/*',
      schema: {
        name: fields.slug({ name: { label: 'Full Name' } }),
        role: fields.text({ label: 'Role/Position' }),
        order: fields.integer({ 
          label: 'Display Order',
          defaultValue: 99 
        }),
        image: fields.image({
          label: 'Profile Photo',
          directory: 'public/images/team',
          publicPath: '/images/team/'
        }),
        bio: fields.text({
          label: 'Biography',
          multiline: true
        }),
        social: fields.object({
          linkedin: fields.text({ label: 'LinkedIn URL' }),
          twitter: fields.text({ label: 'Twitter URL' })
        })
      }
    }),
    'blog-posts': collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Post Title' } }),
        publishedDate: fields.date({ label: 'Published Date' }),
        author: fields.text({ label: 'Author Name' }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true }),
        featured: fields.checkbox({ label: 'Featured Post', defaultValue: false }),
        image: fields.image({
          label: 'Cover Image',
          directory: 'public/images/blog',
          publicPath: '/images/blog/'
        }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/blog',
            publicPath: '/images/blog/'
          }
        })
      }
    }),
    'services': collection({
      label: 'Services',
      slugField: 'title',
      path: 'src/content/services/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Service Title' } }),
        icon: fields.text({ label: 'Icon Name (from ph:)' }),
        description: fields.text({ 
          label: 'Short Description',
          multiline: true 
        }),
        features: fields.array(
          fields.text({ label: 'Feature' }),
          { label: 'Service Features' }
        ),
        order: fields.integer({
          label: 'Display Order',
          defaultValue: 0
        }),
        content: fields.document({
          label: 'Detailed Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/services',
            publicPath: '/images/services/'
          }
        })
      }
    }),
    'industries': collection({
      label: 'Industries',
      slugField: 'title',
      path: 'src/content/industries/*',
      schema: {
        title: fields.slug({ name: { label: 'Industry Name' } }),
        icon: fields.text({ label: 'Icon Name (from ph:)' }),
        description: fields.text({ 
          label: 'Description',
          multiline: true 
        }),
        features: fields.array(
          fields.text({ label: 'Feature' }),
          { label: 'Industry Features' }
        ),
        order: fields.integer({
          label: 'Display Order',
          defaultValue: 0
        })
      }
    }),
    'process-steps': collection({
      label: 'Process Steps',
      slugField: 'title',
      path: 'src/content/process/*',
      schema: {
        title: fields.slug({ name: { label: 'Step Title' } }),
        icon: fields.text({ label: 'Icon Name (from ph:)' }),
        description: fields.text({ 
          label: 'Description',
          multiline: true 
        }),
        steps: fields.array(
          fields.text({ label: 'Sub Step' }),
          { label: 'Detailed Steps' }
        ),
        order: fields.integer({
          label: 'Step Order',
          defaultValue: 0
        })
      }
    }),
    'site-settings': collection({
      label: 'Site Settings',
      slugField: 'key',
      path: 'src/content/settings/*',
      format: 'json',
      schema: {
        key: fields.slug({ name: { label: 'Setting Key' } }),
        name: fields.text({ label: 'Company Name' }),
        title: fields.text({ label: 'Site Title' }),
        description: fields.text({ 
          label: 'Site Description',
          multiline: true 
        }),
        contact: fields.object({
          phone: fields.text({ label: 'Phone Number' }),
          email: fields.text({ label: 'Email Address' }),
          address: fields.text({ 
            label: 'Address',
            multiline: true 
          })
        }),
        social: fields.object({
          twitter: fields.text({ label: 'Twitter URL' }),
          linkedin: fields.text({ label: 'LinkedIn URL' }),
          facebook: fields.text({ label: 'Facebook URL' })
        }),
        theme: fields.object({
          primaryColor: fields.text({ label: 'Primary Color' }),
          secondaryColor: fields.text({ label: 'Secondary Color' }),
          accentColor: fields.text({ label: 'Accent Color' })
        })
      }
    })
  }
});
