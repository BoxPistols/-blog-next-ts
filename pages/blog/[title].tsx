import { GetStaticPaths, GetStaticProps } from 'next'

export default function Post({ title }: { title: string }) {
    return (
        <div>
            <h1>Title:{title}</h1>
        </div>
    )
}
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: {
                    title: 'post-1',
                    // http://localhost:3000/blog/post-1
                },
            },
        ],
        fallback: false,
    }
}
export const getStaticProps: GetStaticProps = async ({ params: { title } }) => {
    return {
        props: { title },
    }
}
