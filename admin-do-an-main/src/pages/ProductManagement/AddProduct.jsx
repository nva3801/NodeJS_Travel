import React, { useEffect, useState } from 'react'
import {
  Button, Checkbox, DatePicker, Form, Input,
  InputNumber, Upload, notification, Modal,
  Breadcrumb
}
  from 'antd';
import { Link, useHistory, useParams, useRouteMatch } from 'react-router-dom';
import { Typography } from 'antd';
import {
  CheckCircleOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import '../../common/Style/InsertForm.css'
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Editor } from "@tinymce/tinymce-react";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FormSelectProvince from '../../common/controller/FormSelectProvince';
import { FullPageLoading } from '../../common/controller/FullPageLoading';

const { TextArea } = Input;
const { Title } = Typography;

function AddProduct() {

  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [destination, setDestination] = useState('')
  const [price, setPrice] = useState('')
  const [starting_point, setStartingPoint] = useState('')
  const [time, setTime] = useState('')
  const [tour, setTour] = useState('')
  const [tour_policy, setTourPolicy] = useState('')
  const [vehicle, setVehicle] = useState('')
  const [description, setDescription] = useState('')
  const [locationList, setLocationList] = useState([])
  const [category_id, setCategoryId] = useState('')
  const [isLoading, setIsLoading] = useState(false);


  const history = useHistory()
  const backPage = () => {
    history.push('/MainLayout/location-management')
  }

  useEffect(() => {
    const DataList = async () => {
      const response = await fetch(`http://localhost:8000/v1/category-item`)
      setLocationList(await response.json())
    };
    DataList(locationList)
  }, [])

  const handleSubmit = (e) => {
    var formdata = new FormData();
    formdata.append('title', title);
    formdata.append('slug', slug);
    formdata.append('description', description)
    formdata.append('destination', destination)
    formdata.append('price', price)
    formdata.append('starting_point', starting_point)
    formdata.append('time', time)
    formdata.append('tour', tour)
    formdata.append('tour_policy', tour_policy)
    formdata.append('vehicle', vehicle)
    formdata.append('category_id', category_id);
    formdata.append(
      "image",
      document.getElementById("image").files[0],
    );
    var config = {
      method: 'post',
      url: 'http://localhost:8000/v1/product',
      data : formdata
    };
    e.preventDefault();
    axios(config)
      .then(res => {
        console.log(res);
        notification.open({
          message: 'Thêm thành công',
          description:
            'Dữ liệu của bạn đã được đẩy lên thành công',
          icon: <CheckCircleOutlined style={{ color: '#108ee9' }} />,
        });
        history.push('/MainLayout/product-management')
      })
      .catch(err => {
        console.log(err);
        notification.open({
          message: 'Thêm thất bại',
          description:
            'Dữ liệu của bạn đã được đẩy lên thất bại',
          icon: <InfoCircleOutlined style={{ color: '#ff4d4f' }} />,
        });
      })
  }
  return (
    <div className='page-add'>
      <div className='head-tbl'>
        <Title level={2} italic={true}
          style={{ textTransform: "capitalize" }}
        >Thêm mới</Title>
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
        <Breadcrumb.Item>Quản lý danh mục</Breadcrumb.Item>
        <Breadcrumb.Item>Thêm mới</Breadcrumb.Item>
      </Breadcrumb>
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

        <label>Điểm đến:</label>
        <input type="text" class="form-control"
          required
          onChange={e => setDestination(e.target.value)}
          // onChange={handleChange}
          value={destination}
        />
        
        <label>Giá:</label>
        <input type="text" class="form-control"
          required
          onChange={e => setPrice(e.target.value)}
          // onChange={handleChange}
          value={price}
        />

        <label>Điểm bắt đầu:</label>
        <input type="text" class="form-control"
          required
          onChange={e => setStartingPoint(e.target.value)}
          // onChange={handleChange}
          value={starting_point}
        />

        <label>Thời gian:</label>
        <input type="text" class="form-control"
          required
          onChange={e => setTime(e.target.value)}
          // onChange={handleChange}
          value={time}
        />

        <label>Tour:</label>
        <input type="text" class="form-control"
          required
          onChange={e => setTour(e.target.value)}
          // onChange={handleChange}
          value={tour}
        />

        <label>Chính sách Tour:</label>
        <input type="text" class="form-control"
          required
          onChange={e => setTourPolicy(e.target.value)}
          // onChange={handleChange}
          value={tour_policy}
        />

        <label>Phương tiện:</label>
        <input type="text" class="form-control"
          required
          onChange={e => setVehicle(e.target.value)}
          // onChange={handleChange}
          value={vehicle}
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
            <option value={item._id}>
              {item.title}
            </option>
          ))}
        </select>
        <button class="btn-primary" onClick={backPage} style={{ backgroundColor: '#ff4d4f' }} > Quay lại </button>

        <button class="btn-primary" type='submit' style={{ backgroundColor: '#108ee9' }} > Nhập </button>

      </form>
      <FullPageLoading isLoading={isLoading} />
    </div>
  )
}

export default AddProduct