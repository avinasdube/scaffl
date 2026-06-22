type AnalyzeButtonProps = {
    onClick: () => void;
};

export default function AnalyzeButton({
    onClick,
}: AnalyzeButtonProps){
    return (
        <button
        onClick={onClick}
        className="w-fit h-fit pl-4 pr-4 pt-2 pb-2 rounded-lg bg-blue-500 text-white">
            Analyze
        </button>
    )
}
