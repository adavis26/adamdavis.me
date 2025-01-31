import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    
    return {
        h1: ({ children }) => (<h1 className='text-2xl font-bold py-5'>{children}</h1>),
        h2: ({ children }) => (<h2 className='text-xl font-bold py-3'>{children}</h2>),
        h3: ({ children }) => (<h2 className='text-lg font-bold py-2'>{children}</h2>),
        h4: ({ children }) => (<h2 className='text-base font-bold py-1'>{children}</h2>),
        ul: ({ children }) => (<ul className='border border-gray-200 shadow rounded p-5 mt-3 list-disc list-inside space-y-2 md:text-md text-sm'>{children}</ul>),
        li: ({ children }) => (<li className='leading-relaxed'>{children}</li>),
        hr: () => (<hr className='border-gray-300 my-4' />),
        p: ({ children }) => (<p className='py-2 md:text-md text-sm'>{children}</p>),
        ...components,
    }
}