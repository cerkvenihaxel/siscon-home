import { Navbar } from "./Navbar"

const posts = [
    {
      title: 'APOS',
      href: '#',
      imageUrl:
        '/apos.jpeg',
        href: 'http://apos.siscon.info/',
    },

    {
        title: 'OSUNLAR',
        href: 'http://osunlar.siscon.info/',
        imageUrl:
          '/osunlar.png',
     
      },

    

  ]
  
  export default function Column() {
    return (
        <div>
            <Navbar />
      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Prótesis</h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              A continuación seleccione la obra social con la cual quiere operar.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg hover:scale-110">
                <div className="flex-shrink-0">
                    <a href={post.href}>
                  <img className="h-48 w-full object-cover " src={post.imageUrl} alt="" />
                  </a>
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                
                    <a href={post.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>

    )
  }
  