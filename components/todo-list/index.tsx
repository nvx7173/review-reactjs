import { ChangeEventHandler, FC, memo, MouseEventHandler } from 'react';

interface Job {
    id: string;
    name: string;
    isDone: boolean;
}

interface IProps {
    data: Job[];
    onDone?: ChangeEventHandler;
    onEdit: MouseEventHandler;
    onDelete: MouseEventHandler;
}

const TodoList: FC<IProps> = ({ data, onDone, onEdit, onDelete }) => {
    return (
        <div className="mb-8">
            <p className="mb-3 text-xl font-bold">
                {data[0]?.isDone ? 'Hoàn thành' : 'Chưa hoàn thành'}
            </p>
            {data?.map((item: Job) => (
                <div className="flex justify-between" key={item?.id}>
                    <div className="flex gap-3">
                        <input
                            type="checkbox"
                            name="item"
                            onChange={onDone}
                            id={item?.id}
                            defaultChecked={item?.isDone}
                        />

                        <p
                            className={
                                item?.isDone ? 'text-blue line-through' : ''
                            }
                        >
                            {item?.name}
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button onClick={onEdit} id={JSON.stringify(item)}>
                            Edit
                        </button>
                        <button onClick={onDelete} id={item.id}>
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default memo(TodoList);
