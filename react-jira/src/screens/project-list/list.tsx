import { Table } from "antd";
import React from "react"
import { User } from "./search-panel";
import dayjs from 'dayjs'
import { Link } from "react-router-dom";
import Pin from '../../common/pin.jsx'
import { useEditProject } from '../../utils/project.jsx'
interface Project {
    id: string;
    name: string;
    personId: string;
    pin: boolean;
    organization: string,
    created: number
}
interface ListProps {
    list: Project[],
    users: User[]

}
const List = ({ list, users }: ListProps) => {
    const { mutate } = useEditProject()
    const pinProject = (id) => (pin) => mutate({ id, pin });
    return (
        <Table
            pagination={false}
            columns={[
                {
                    title: <Pin checked={true} disabled={true} />,
                    render(value, project) {
                        return (
                            <Pin
                                checked={project.pin}
                                onCheckedChange={pinProject(project.id)}
                            />
                        );
                    },
                },
                {
                    title: '名称',
                    dataIndex: 'name',
                    sorter: (a, b) => a.name.localeCompare(b.name),
                    render(value, project) {
                        return (
                            <Link to={String(project.id)}>{project.name}</Link>
                        )
                    }
                },
                {
                    title: '部门',
                    dataIndex: 'organization'
                },
                {
                    title: '负责人',
                    render(value, project) {
                        return (
                            <span>
                                {users.find(user => user.id === project.personId)?.name || "未知"}
                            </span>
                        )

                    }
                }, {
                    title: '创建时间',
                    render(value, project) {
                        return (
                            <span>
                                {project.created ? dayjs(project.created).format('YYYY-MM-DD') : "无"}
                            </span>
                        )
                    }
                }
            ]}
            dataSource={list}
        />

        // <thead>
        //         <tr>
        //             <th>名称</th>
        //             <th>负责人</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {
        //             list.map((project) => {
        //                 return <tr key={project.id}>
        //                     <td>{project.name}</td>
        //                     <td>{users.find(user => user.id === project.personId)?.name || "未知"}</td>
        //                 </tr>
        //             }
        //             )
        //         }
        //     </tbody>

    )
}

export default List;