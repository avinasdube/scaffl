type AnalyzeButtonProps = {
    onClick: () => void;
    loading: boolean
};

export default function AnalyzeButton({
    onClick,
    loading
}: AnalyzeButtonProps){
    return (
        <button
        onClick={onClick}
        className="w-fit h-fit pl-4 pr-4 pt-2 pb-2 rounded-lg bg-blue-500 text-white">
            {loading ? "Analyzing" : "Analyze"}
        </button>
    )
}
