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

function AddCategoryItem() {

  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [image, setImage] = useState('')
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
      const response = await fetch(`http://localhost:8000/v1/category-list`)
      setLocationList(await response.json())
    };
    DataList(locationList)
  }, [])

  console.log(category_id)

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
      method: 'post',
      url: 'http://localhost:8000/v1/category-item',
      data : formdata
    };
    console.log(document.getElementById("image"))
    e.preventDefault();
    axios(config)
      .then(res => {
        console.log(res);
        notification.open({
          message: 'Th??m th??nh c??ng',
          description:
            'D??? li???u c???a b???n ???? ???????c ?????y l??n th??nh c??ng',
          icon: <CheckCircleOutlined style={{ color: '#108ee9' }} />,
        });
        history.push('/MainLayout/category-item-management')
      })
      .catch(err => {
        console.log(err);
        notification.open({
          message: 'Th??m th???t b???i',
          description:
            'D??? li???u c???a b???n ???? ???????c ?????y l??n th???t b???i',
          icon: <InfoCircleOutlined style={{ color: '#ff4d4f' }} />,
        });
      })
  }
  return (
    <div className='page-add'>
      <div className='head-tbl'>
        <Title level={2} italic={true}
          style={{ textTransform: "capitalize" }}
        >Th??m m???i</Title>
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
        <Breadcrumb.Item>Qu???n l?? danh m???c</Breadcrumb.Item>
        <Breadcrumb.Item>Th??m m???i</Breadcrumb.Item>
      </Breadcrumb>
      <form onSubmit={(e) => handleSubmit(e)} className='form-add'>

        <label>T??n Danh m???c:</label>
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

        <label>M?? t???:</label>
        <textarea class="form-control"
          required
          onChange={e => setDescription(e.target.value)}
          // onChange={handleChange}
          value={description}
        />

        <label>???nh:</label>
        <input style={{ border: 'none' }} type="file" class="form-control" id="image"/> 

        <label>Danh m???c</label>
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
        <button class="btn-primary" onClick={backPage} style={{ backgroundColor: '#ff4d4f' }} > Quay l???i </button>

        <button class="btn-primary" type='submit' style={{ backgroundColor: '#108ee9' }} > Nh???p </button>

      </form>
      <FullPageLoading isLoading={isLoading} />
    </div>
  )
}

export default AddCategoryItem