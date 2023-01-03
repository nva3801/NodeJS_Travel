import {
    Button, Table, Dropdown, Space, Menu,
    Breadcrumb, Input, Form, Modal, notification
}
    from 'antd';
import Column from "antd/lib/table/Column";
import React, { useEffect, useState } from 'react';
import {
    MenuFoldOutlined, DeleteOutlined, PlusCircleOutlined,
    LoadingOutlined, CheckCircleOutlined, EditOutlined,
    DownOutlined, FormOutlined, InfoCircleOutlined
} from '@ant-design/icons';
import axios from 'axios';
import {
    BrowserRouter, BrowserRouter as Router, Routes,
    Route, Link, Switch, useRouteMatch, NavLink
} from "react-router-dom";
import { Typography } from 'antd';
const { Title } = Typography;

const CategoryManagementList = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);

    let { path, url } = useRouteMatch();

    const [data, setData] = useState([])
    const DataList = async () => {
        const response = await fetch(`http://localhost:8000/v1/category-list/`)
        setData(await response.json())
    };

    useEffect(() => {
        DataList(data)
    }, [])

    const start = () => {
        setLoading(true); // ajax request after empty completing

        setTimeout(() => {
            setSelectedRowKeys([]);
            setLoading(false);
        }, 1000);
    };


    const onSelectChange = (newSelectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const handleDelete = (id) => {
        console.log('id', id)
        Modal.confirm({
            title: 'Bạn có muốn xóa',
            onOk: () => {
                axios.delete(`http://localhost:8000/v1/category-list/${id}`)
                    .then((res) => {
                        notification.open({
                            message: 'Thêm thành công',
                            description:
                                'Dữ liệu đã xóa thành công',
                            icon: <CheckCircleOutlined style={{ color: '#108ee9' }} />,
                        })
                        DataList()
                    }
                    )
            }
        })
    }

    const rowSelection = {
        columnWidth: 10,
        selectedRowKeys,
        onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
        <div className='form-list'>
            <div
                style={{
                    marginBottom: 16,
                }}
            >
                {/* <Button type="primary" onClick={start} disabled={!hasSelected} loading={loading}>
            Reload
          </Button> */}
                <div className='head-tbl'>
                    <Title level={2} italic={true}
                        style={{ textTransform: "capitalize" }}
                    >Quản lý list danh mục</Title>
                    <Form.Item label="Tìm kiếm"><Input /> </Form.Item>
                </div>
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                        fontWeight: '500',
                        textTransform: 'uppercase',
                        backgroundColor: '#fff',
                        borderRadius: '10px',
                        padding: '0.2%'
                    }}
                >
                    <Breadcrumb.Item>Quản lí list Dạnh mục</Breadcrumb.Item>
                </Breadcrumb>
                <Button type="primary" onClick={start} loading={loading}>
                    <Link to={`${url}/addCategoryList`}>Thêm mới </Link>
                </Button>
                <span
                    style={{
                        marginLeft: 8,
                    }}
                >
                    {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
                </span>
            </div>
            <Table
                //    rowSelection={rowSelection}
                dataSource={data}
                bordered
                size='middle'
            >
                <Column
                    title='STT'
                    dataIndex="STT"
                    key="STT"
                    width='10px'
                    render={(value, record, index) => {
                        return <div style={{ textAlign: 'center' }}>{index + 1} </div>
                    }}

                />
                <Column
                    title='Tên Danh mục'
                    dataIndex="title"
                    key="categoryName"
                    width={"300px"}
                />
                <Column
                    title='Slug'
                    dataIndex="slug"
                    key="categoryName"
                    width={"300px"}
                />
                <Column
                    title='Danh Mục'
                    dataIndex="category_id"
                    key="categoryName"
                    width={"300px"}
                />
                <Column
                    title='Thao tác'
                    dataIndex="action"
                    key="action"
                    width={"5%"}
                    render={(value, record) => (
                        <Dropdown overlay={
                            <Menu>

                                <Menu.Item>
                                    <NavLink to={`${url}/viewCategory/${record._id}`}> <div style={{ color: 'blue' }}><InfoCircleOutlined /> Chi tiết</div></NavLink>
                                </Menu.Item>

                                <Menu.Item>
                                    <div onClick={() => handleDelete(record._id)}
                                        style={{ color: 'red' }}
                                    ><DeleteOutlined /> Xóa</div>
                                </Menu.Item>
                            </Menu>
                        }>
                            <a onClick={e => e.preventDefault()}>
                                <Space>
                                    <FormOutlined />
                                </Space>
                            </a>
                        </Dropdown>

                    )}
                />
            </Table>
        </div>
    );
};

export default CategoryManagementList;