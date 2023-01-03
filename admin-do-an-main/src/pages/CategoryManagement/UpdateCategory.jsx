import React, { useEffect, useState } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom';
import '../../common/Style/FormView.css'
import axios from 'axios';
import {
    Button, Checkbox, DatePicker, Form, Input,
    InputNumber, Upload, notification, Modal,
    Breadcrumb, Typography
}
    from 'antd';
import {
    CheckCircleOutlined,
    InfoCircleOutlined
}
    from '@ant-design/icons';
import { Editor } from "@tinymce/tinymce-react";
function UpdateCategory(data) {

    const [title, setTitle] = useState(data.data.title)
    const [slug, setSlug] = useState(data.data.slug)

    const { id } = useParams()

    const history = useHistory()

    const handleSubmit = (e) => {
        var formdata = new FormData();
        formdata.append('title', title);
        formdata.append('slug', slug);
        var config = {
            method: 'put',
            url: `http://127.0.0.1:8000/categories/${id}`,
            data: formdata
        };
        e.preventDefault();
        axios(config)
            .then(res => {
                notification.open({
                    message: 'Thêm thành công',
                    description:
                        'Dữ liệu của bạn đã được đẩy lên thành công',
                    icon: <CheckCircleOutlined style={{ color: '#108ee9' }} />,
                });
                history.push('/MainLayout/category-management')
            })
            .catch(err => {
                notification.open({
                    message: 'Thêm thất bại',
                    description:
                        'Dữ liệu của bạn đã được đẩy lên thất bại',
                    icon: <InfoCircleOutlined style={{ color: '#ff4d4f' }} />,
                });
            })
    }


    return (
        <div>

            <form onSubmit={(e) => handleSubmit(e)} className='form-add'>

                <label>Tên Danh mục:</label>
                <input type="text" class="form-control"
                    onChange={e => setTitle(e.target.value)}
                    // onChange={(e) => handleChange(e)}
                    value={title}
                />

                <label>Slug:</label>
                <input type="text" class="form-control"
                    onChange={e => setSlug(e.target.value)}
                    // onChange={(e) => handleChange(e)}
                    value={slug}
                />

                <br />
                <button class="btn-primary" type='submit' style={{ backgroundColor: '#108ee9', marginTop: '20px' }} > Nhập </button>

            </form>
        </div>
    )
}

export default UpdateCategory