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
import FormViewImage from '../../common/controller/FormViewImage';
import axios from 'axios';
import {
    BrowserRouter, BrowserRouter as Router, Routes,
    Route, Link, Switch, useRouteMatch, NavLink
} from "react-router-dom";
import { Typography } from 'antd';
const { Title } = Typography;

const CheckoutManagement = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [loading, setLoading] = useState(false);

    let { path, url } = useRouteMatch();

    const [data, setData] = useState([])
    const DataList = async () => {
        const response = await fetch(`http://localhost:8000/v1/list/checkout`)
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
                    >Qu???n l?? ?????t tour</Title>
                    <Form.Item label="T??m ki???m"><Input /> </Form.Item>
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
                    <Breadcrumb.Item>Qu???n l?? ?????t tour</Breadcrumb.Item>
                </Breadcrumb>
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
                    title='T??n ng?????i ?????t'
                    dataIndex="name"
                    key="name"
                    width={"300px"}
                />
                <Column
                    title='S??? ??i???n tho???i'
                    dataIndex="phoneNumber"
                    key="phoneNumber"
                    width={"300px"}
                />
                <Column
                    title='Email'
                    dataIndex="email"
                    key="categoryName"
                    width={"300px"}
                />
                <Column
                    title='S??? l?????ng ng?????i l???n'
                    dataIndex="number_adult"
                    key="categoryName"
                    width={"300px"}
                />
                <Column
                    title='S??? l?????ng tr??? em'
                    dataIndex="number_children"
                    key="categoryName"
                    width={"300px"}
                />
                <Column
                    title='S??? l?????ng em b??'
                    dataIndex="number_baby"
                    key="categoryName"
                    width={"300px"}
                />
                <Column
                    title='T???ng ti???n'
                    dataIndex="total"
                    key="categoryName"
                    width={"300px"}
                />
                <Column
                    title='Ph????ng th???c thanh to??n'
                    dataIndex="payment_methods"
                    key="categoryName"
                    width={"300px"}
                />
                <Column
                    title='M?? Tour'
                    dataIndex="tour_code"
                    key="categoryName"
                    width={"300px"}
                />
            </Table>
        </div>
    );
};

export default CheckoutManagement;