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

function AddTourCode() {

  const [tourCode, setTourCode] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [priceAdult, setPriceAdult] = useState('')
  const [priceChildren, setPriceChildren] = useState('')
  const [priceBaby, setPriceBaby] = useState('')
  const [locationList, setLocationList] = useState([])
  const [category_id, setCategoryId] = useState(5)
  const [isLoading, setIsLoading] = useState(false);


  const history = useHistory()
  const backPage = () => {
    history.push('/MainLayout/location-management')
  }

  useEffect(() => {
    const DataList = async () => {
      const response = await fetch(`http://localhost:8000/v1/product`)
      setLocationList(await response.json())
    };
    DataList(locationList)
  }, [])

  // const handleSubmit = (e) => {
  //   var formdata = new FormData();
  //   formdata.append('product_id', category_id);
  //   formdata.append('tour_code', tourCode);
  //   formdata.append('start', start);
  //   formdata.append('end', end);
  //   formdata.append('price_adult', priceAdult);
  //   formdata.append('price_children', priceChildren);
  //   formdata.append('price_baby', priceBaby);

  //   var config = {
  //     method: 'post',
  //     url: 'http://localhost:8000/v1/tourcode',
  //     data : formdata
  //   };
  //   e.preventDefault();
  //   axios(config)
  //     .then(res => {
  //       console.log(res);
  //       notification.open({
  //         message: 'Th??m th??nh c??ng',
  //         description:
  //           'D??? li???u c???a b???n ???? ???????c ?????y l??n th??nh c??ng',
  //         icon: <CheckCircleOutlined style={{ color: '#108ee9' }} />,
  //       });
  //       history.push('/MainLayout/tourcode-management')
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       notification.open({
  //         message: 'Th??m th???t b???i',
  //         description:
  //           'D??? li???u c???a b???n ???? ???????c ?????y l??n th???t b???i',
  //         icon: <InfoCircleOutlined style={{ color: '#ff4d4f' }} />,
  //       });
  //     })
  function handleSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:8000/v1/tourcode', {
      product_id: category_id,
      tour_code: tourCode,
      start: start,
      end: end,
      price_adult: priceAdult,
      price_children: priceChildren,
      price_baby: priceBaby
    }).then(res => {
      notification.open({
                message: 'Th??m th??nh c??ng',
                description:
                  'D??? li???u c???a b???n ???? ???????c ?????y l??n th??nh c??ng',
                icon: <CheckCircleOutlined style={{ color: '#108ee9' }} />,
              });
      })
      .catch((error) => {
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
        <label>S???n ph???m</label>
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

        <label>Tour Code:</label>
        <input type="text" class="form-control"
          required
          onChange={e => setTourCode(e.target.value)}
          // onChange={handleChange}
          value={tourCode}
        />

        <label>Ng??y ??i:</label>
        <input type="text" class="form-control"
          required
          onChange={e => setStart(e.target.value)}
          // onChange={handleChange}
          value={start}
        />

        <label>Ng??y v???:</label>
        <input type="text" class="form-control"
          required
          onChange={e => setEnd(e.target.value)}
          // onChange={handleChange}
          value={end}
        />
        
        <label>Gi?? ng?????i l???n:</label>
        <input type="text" class="form-control"
          required
          onChange={e => setPriceAdult(e.target.value)}
          // onChange={handleChange}
          value={priceAdult}
        />

        <label>Gi?? tr??? em:</label>
        <input type="text" class="form-control"
          required
          onChange={e => setPriceChildren(e.target.value)}
          // onChange={handleChange}
          value={priceChildren}
        />

        <label>Gi?? em b??:</label>
        <input type="text" class="form-control"
          required
          onChange={e => setPriceBaby(e.target.value)}
          // onChange={handleChange}
          value={priceBaby}
        />

       

        <button class="btn-primary" onClick={backPage} style={{ backgroundColor: '#ff4d4f' }} > Quay l???i </button>

        <button class="btn-primary" type='submit' style={{ backgroundColor: '#108ee9' }} > Nh???p </button>

      </form>
      <FullPageLoading isLoading={isLoading} />
    </div>
  )
}

export default AddTourCode