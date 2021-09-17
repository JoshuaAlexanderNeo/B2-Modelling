exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        allStrapiGalleries {
          edges {
            node {
              FullName
              id
            }
          }
        }
      }
    `)
    data.allStrapiGalleries.edges.forEach(edge => {
      const slug = "models/" + edge.node.FullName.replace(/ /g, "") + edge.node.id.replace( /^\D+/g, ''); // replace all leading non-digits with nothing
      console.log(slug);
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/templates/model-template.js`),
        context: { slug: edge.node.id },
      })
    })
  }