
export default function Btn({ children, onClick, className }) {
    return (
        <button 
            onClick={onClick} 
            className={`btn font-bold text-lg bg-[#E7FE29] rounded-2xl border-0 shadow-none ${className}`}
        >
            {children}
        </button>
    );
}