async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["skills"] },
    }
  ).then((response) => response.json());
}

function extractProgrammingSkillEntries(fetchResponse: any): object {
  const entriesObject = {
    programmingSkills: fetchResponse?.data?.programmingSkillsCollection?.items,
  };
  return entriesObject;
}

export async function getAllProgrammingSkills() {
  const entries = await fetchGraphQL(
    `query {
        programmingSkillsCollection {
            items {
              image{url},
              altText
            }
        }
    }`
  );
  return extractProgrammingSkillEntries(entries);
}

function extractSkillbarEntries(fetchResponse: any): object {
  const entriesObject = {
    programming: fetchResponse?.data?.programmingSkillbarCollection?.items,
    framework: fetchResponse?.data?.frameworkSkillbarCollection?.items,
    database: fetchResponse?.data?.databaseSkillbarCollection?.items,
  };

  const wrappedObject = {
    skillbars: entriesObject,
  };

  return wrappedObject;
}

export async function getAllSkillbars() {
  const entries = await fetchGraphQL(
    `query {
      programmingSkillbarCollection {
        items {
          title,
          level,
        },
      },
      frameworkSkillbarCollection {
        items {
          title,
          level,
        },
      },
      databaseSkillbarCollection {
        items {
          title,
          level,
        }
      }
    }`
  );
  return extractSkillbarEntries(entries);
}
