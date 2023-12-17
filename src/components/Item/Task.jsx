
import '../Item/style-task.scss';


function TodoItem ({item, className, openDescriptions}) {

           return (
            <div 
                className={className}
                data-id = {item.id}
                data-block = {item.status}
                >
                    <h4 key="text"
                        onClick={(e)=>openDescriptions(e)}
                        data-id = {item.id}
                        data-block = {item.status}
                        >
                            {item.title}
                        </h4>
            </div>
            )
}
export default TodoItem;