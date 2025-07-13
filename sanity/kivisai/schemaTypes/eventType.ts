import {CalendarIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beschreibung',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'content',
      title: 'Inhalt',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H2', value: 'h2'},
            {title: 'H3', value: 'h3'},
          ],
        },
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),
    defineField({
      name: 'startDate',
      title: 'Startdatum',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'Enddatum',
      type: 'datetime',
    }),
    defineField({
      name: 'location',
      title: 'Ort',
      type: 'object',
      fields: [
        {name: 'name', type: 'string', title: 'Name'},
        {name: 'address', type: 'text', title: 'Adresse', rows: 2},
        {name: 'city', type: 'string', title: 'Stadt'},
        {name: 'zipCode', type: 'string', title: 'PLZ'},
        {name: 'country', type: 'string', title: 'Land'},
        {name: 'online', type: 'boolean', title: 'Online Event'},
        {name: 'meetingUrl', type: 'url', title: 'Meeting URL'},
      ],
    }),
    defineField({
      name: 'image',
      title: 'Event Bild',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          {title: 'Webinar', value: 'webinar'},
          {title: 'Workshop', value: 'workshop'},
          {title: 'Konferenz', value: 'conference'},
          {title: 'Meetup', value: 'meetup'},
          {title: 'Training', value: 'training'},
          {title: 'Vortrag', value: 'talk'},
        ],
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Geplant', value: 'planned'},
          {title: 'Registrierung offen', value: 'registration-open'},
          {title: 'Ausgebucht', value: 'sold-out'},
          {title: 'Abgeschlossen', value: 'completed'},
          {title: 'Abgesagt', value: 'cancelled'},
        ],
      },
      initialValue: 'planned',
    }),
    defineField({
      name: 'maxParticipants',
      title: 'Maximale Teilnehmer',
      type: 'number',
    }),
    defineField({
      name: 'price',
      title: 'Preis',
      type: 'object',
      fields: [
        {name: 'amount', type: 'number', title: 'Betrag'},
        {name: 'currency', type: 'string', title: 'Währung', initialValue: 'EUR'},
        {name: 'free', type: 'boolean', title: 'Kostenlos', initialValue: false},
      ],
    }),
    defineField({
      name: 'organizer',
      title: 'Veranstalter',
      type: 'reference',
      to: [{type: 'author'}],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Veröffentlicht am',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'startDate',
      media: 'image',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title,
        subtitle: subtitle ? new Date(subtitle).toLocaleDateString('de-DE') : 'Kein Datum',
        media,
      }
    },
  },
}) 