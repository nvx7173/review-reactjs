import TodoList from '@/components/todo-list';
import { NextPage } from 'next';
import { ChangeEvent, MouseEvent, useCallback, useState } from 'react';
import { uid } from 'uid';

interface Job {
    id: string;
    name: string;
    isDone: boolean;
}

const ToDoList: NextPage = () => {
    const [input, setInput] = useState<string>('');
    const [editData, setEditData] = useState<Job | null>(null);

    const [data, setData] = useState<Job[]>([]);
    const addOrUpdateJob = useCallback(() => {
        if (!input) {
            alert('Nhập job');
            return;
        }
        if (editData) {
            const cloneData = [...data];
            const newData: Job[] = cloneData.map((item) => {
                if (item.id === editData.id) {
                    item.name = input;
                }
                return item;
            });
            setData(newData);
            setEditData(null);
        } else {
            setData((prev: Job[]) => [
                ...prev,
                {
                    id: uid(16),
                    name: input,
                    isDone: false,
                },
            ]);
        }

        setInput('');
    }, [data, editData, input]);

    const onDone = useCallback(
        (e: ChangeEvent) => {
            const cloneData = [...data];
            const newData: Job[] = cloneData.map((item) => {
                if (item.id === e.target.id) {
                    item.isDone = !item.isDone;
                }
                return item;
            });
            setData(newData);
        },
        [data],
    );

    const onChangeJob = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }, []);

    const onEdit = useCallback((e: MouseEvent<HTMLButtonElement>) => {
        const dataEdit = JSON.parse(e.currentTarget.id) as Job;
        setEditData(dataEdit);
        setInput(dataEdit.name);
    }, []);

    const onDelete = useCallback(
        (e: MouseEvent<HTMLButtonElement>) => {
            const cloneData = [...data];
            const leftData = cloneData.filter(
                (x) => x.id !== e.currentTarget.id,
            );
            setData(leftData);
        },
        [data],
    );

    return (
        <div className="flex h-screen items-center justify-center">
            <div>
                <h1 className="mb-3 text-xl font-bold">
                    To do list typescript
                </h1>
                <div className="mb-8 flex">
                    <input
                        type="text"
                        className="border px-2"
                        value={input}
                        onChange={onChangeJob}
                    />
                    <button
                        className="ml-2 border bg-gray-500 p-2 px-4 text-white"
                        onClick={addOrUpdateJob}
                    >
                        {editData ? 'Update' : 'Add'}
                    </button>
                </div>
                <TodoList
                    data={data.filter((x) => !x?.isDone)}
                    onDone={onDone}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
                <TodoList
                    data={data.filter((x) => x?.isDone)}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            </div>
        </div>
    );
};

export default ToDoList;
