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
function UpdateTourCode(data) {

    const [title, setTitle] = useState('')
    const [slug, setSlug] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [locationList, setLocationList] = useState([])
    const [category_id, setCategoryId] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const { id } = useParams()

    const history = useHistory()

    const handleSubmit = (e) => {
        var formdata = new FormData();
        formdata.append('title', title);
        formdata.append('slug', slug);
        formdata.append('description', description)
        formdata.append('category_id', category_id);
        formdata.append(
            "image",
            document.getElementById("image").files[0],
        );
        var config = {
            method: 'put',
            url: `http://127.0.0.1:8000/categoryitem/${id}`,
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
                required
                onChange={e => setTitle(e.target.value)}
                // onChange={handleChange}
                value={title}
                />

                <label>Slug:</label>
                <input type="text" class="form-control"
                required
                onChange={e => setSlug(e.target.value)}
                // onChange={handleChange}
                value={slug}
                />

                <label>Mô tả:</label>
                <textarea class="form-control"
                required
                onChange={e => setDescription(e.target.value)}
                // onChange={handleChange}
                value={description}
                />

                <label>Ảnh:</label>
                <input style={{ border: 'none' }} type="file" class="form-control" id="image"/> 

                <label>Danh mục</label>
                <select onChange={e => setCategoryId(e.target.value)}
                class="form-control"
                value={category_id}
                >
                {locationList.map(item => (
                    <option value={item.id}>
                    {item.title}
                    </option>
                ))}
                </select>

                <button class="btn-primary" type='submit' style={{ backgroundColor: '#108ee9', marginTop: '20px' }} > Nhập </button>

            </form>
        </div>
    )
}

export default UpdateTourCode