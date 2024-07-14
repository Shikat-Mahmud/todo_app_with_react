export const TodoClearAll = ({onHandleClearAll}) => {
    return (
        <section className="clear-btn">
            <button
                type="button"
                style={{ background: "none", color: "#fff" }}
                onClick={onHandleClearAll}
            >
                Clear All
            </button>
        </section>
    );
};