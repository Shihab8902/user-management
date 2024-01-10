

const SectionTitle = ({ heading, color }) => {
    return (
        <div className="flex items-center gap-1">
            <div className={`h-6 w-6 ${color} rounded-tl-full rounded-bl-full`}></div>
            <h4 className="font-semibold">{heading}</h4>
        </div>
    )
}

export default SectionTitle