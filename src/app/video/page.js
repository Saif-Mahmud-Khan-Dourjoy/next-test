export async function generateMetadata() {
    return {
        title: "TS360 | Video Page",
        description: `Find our videos here.`,
    }
};

const Video=()=>{
    return (
        <div className="h-screen flex items-center justify-center">
            Video Page
        </div>
    )
}

export default Video