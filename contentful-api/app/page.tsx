import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const URL=`https://cdn.contentful.com//spaces/${process.env.SPACE_ID}/environments/${process.env.ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}`

async function getBlogs() {
  const res = await fetch(URL);
  
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <ul>
      <div>This is content</div>
      {blogs.items.map((item: any) => (
        <>
        <li key={item.sys.id} >{item.fields.titleHere}</li>
        {/* <li key={item.sys.id} >{item.fields.heySiriThisIsTitle}</li> */}
        <li className='text-lg font-semibold' key={item.sys.id} >{documentToReactComponents(item.fields.richTextHere)}</li>
        </>
      ))}
    </ul>
  )
}