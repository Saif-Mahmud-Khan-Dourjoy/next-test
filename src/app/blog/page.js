export async function generateMetadata() {
    return {
        title: "TS360 | Blog Page",
        description: `Find our blogs here.`,
    }
};

const Blog=()=>{
    return (
        <div className="h-screen flex items-center justify-center">
            Blog Page
        </div>
    )
}

export default Blog
