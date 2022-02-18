/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    /* "Getting Started" Category */
    {
      type: 'category',
      label: 'Getting Started',
      collapsible: true,
      collapsed: false,
      link: {
        type: 'doc',
        id: 'get-started',
      },
      items: [
        /* "builder system" Category */
        {
          type: "doc",
          id: "getting-started/builder-system"
        },
        /* "Building Your First Build" Category */
        { 
          type: 'category',
          label: 'Building Your First Build',
          link: {
            type: 'generated-index',
          },
          collapsed: false,
          items: [
            { /* "Plot system" Category */
              type: 'category',
              label: 'Plot System',
              link: {
                type: 'doc',
                id: 'getting-started/building-first-build/plot-system',
              },
              items: [
                /* Plot system Documents */
                "getting-started/building-first-build/plot-system/creating-plot",
                {
                  type: "doc",
                  label: "Your Plot's Info",
                  id: "getting-started/building-first-build/plot-system/getting-reference",
                },
                "getting-started/building-first-build/plot-system/submitting-plot"
              ],
            },
          ],
        },
        {
          type: "category",
          label: 'Basic Building',
          link: {
            type: 'generated-index',
          },
          items: [
            {
              type: "doc",
              label: "BTE Buildings",
              id: "getting-started/basic-building/bte-building"
            }
          ]
        },
      ],
    },
    /* "Becoming Official Builder" Category */
    {
      type: 'category',
      label: 'Becoming Official Builder',
      collapsible: true,
      collapsed: true,
      link: {
        type: "generated-index"
      },
      items: [
        {
          type: "doc",
          label: "Requirements",
          id: "become-official-builder/official-builder-req"
        },
        {
          type: "doc",
          label: "Modpack",
          id: "become-official-builder/modpack"
        },
        {
          type: "doc",
          label: "Exam Plot",
          id: "become-official-builder/exam-plot",
        },
        "become-official-builder/finish-the-exam",
      ]
    },
    /* "Improving your building skills" Category */
    {
      type: 'category',
      label: 'Improving your building skills',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'doc',
        id: 'improve',
      },
      items: [
        {
          type: 'doc',
          id: 'worldedit/basic/blocks-ids'
        },
        { /* "World Edit" Category */
          type: 'category',
          label: 'World Edit',
          link: {
            type: "doc",
            id: "worldedit/what-is-worldedit"
          },
          items: [
            /* World Edit Documents */
            { 
              type: 'category',
              label: 'Basic of World Edit',
              link: {
                type: "doc",
                id: "worldedit/basic-worldedit"
              },
              items: [
                "worldedit/basic/blocks-ids",
                "worldedit/basic/select-region",
              ],
            },
            { 
              type: 'category',
              label: 'Basic Commands',
              link: {
                type: "doc",
                id: "worldedit/basic-commands"
              },
              items: [
                "worldedit/basic-commands/wcmd.sel-poly",
              ],
            },
            { 
              type: 'category',
              label: 'Advanced Commands',
              link: {
                type: "doc",
                id: "worldedit/advanced-commands"
              },
              items: [
                "worldedit/advanced-commands/wcmd.brush",
              ],
            }, 
          ],
        },
        { /* "Tips" Category */
        type: 'category',
        label: 'Tips',
        link: {
          type: "generated-index",
        },
        items: [
          "bte-modpack-stuff/best-practices",
          "bte-modpack-stuff/finding-borders-of-my-plot",
          "bte-modpack-stuff/settings",
          "bte-modpack-stuff/teleport",
        ],
      },
      ]
    },
    {
      label: "F.A.Q",
      type: "doc",
      id: "faq",
    }
  ],
};

module.exports = sidebars;
