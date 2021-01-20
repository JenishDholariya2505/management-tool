import React, { useEffect, useState } from 'react';
import { BlogWrapper } from './BlogStyle';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs, deleteBlogs } from '../../../../Core/Redux/Card/CardActions'
import { Icons, JDModal, JDDescriptions, JDTooltip, JdFormComponents, JDSpin } from '../../components/Index'
import AddCard from './AddCard';
import ViewPost from './ViewPost';

const { JdButton } = JdFormComponents

const Blog = () => {
    const dispatch = useDispatch()
    const [test, setTest] = useState(0)
    const [ModalShow, setModalShow] = useState(false)
    const [View, setView] = useState(false)
    const [ViewData, setViewData] = useState(null)
    const [ViewDelete, setViewDelete] = useState(null)
    const [visible, setVisible] = useState(false);
    let blogs = useSelector(state => state.blog)

    useEffect(() => {
        dispatch(getBlogs())
    }, [dispatch])

    const ViewOpen = (d) => { // view post
        setView(true)
        setViewData(d)
        document.getElementById('root').style.filter = 'blur(10px)';
    }
    const Modal = (id) => { // delete Modal Open
        setModalShow(true)
        setViewDelete(id.token)
        setTest(id.title)
        document.getElementById('root').style.filter = 'blur(10px)';
    }
    const ModelOff = () => { // Modal Off All
        setModalShow(false)
        setView(false)
        setVisible(false);
        document.getElementById('root').style.filter = 'blur(0px)';
    }
    const Delete = () => { // Post Delete
        dispatch(deleteBlogs(ViewDelete))
        document.getElementById('root').style.filter = 'blur(0px)';
        setModalShow(false)
    }
    const ModalCreate = values => { // create modal open
        setVisible(true);
        document.getElementById('root').style.filter = 'blur(10px)';
    }
    return (
        <BlogWrapper>
            <div className='d-flex Box'>
                <JDDescriptions title="Blog" />
                <JdButton onClick={ModalCreate} tital='Create' />
            </div>
            <AddCard visible={visible} onCreate={ModelOff} />
            <ViewPost data={ViewData} ModalShow={View} OffAndOn={ModelOff} />
            <JDSpin spinning={blogs.loading} />
            <div className='CardPri d-flex'>
                {blogs.Post.map((d, i) => (
                    <div className='Card' key={i}>
                        <div onClick={() => ViewOpen(d)} className='CardBody'>
                            <img src={`/${d.coverImg}`} alt={d.coverImg} width='310px' />
                        </div>
                        <div className='CardFooter'>
                            <div className='HedData'>
                                <JDTooltip placement="bottom" title={d.title.length > 20 ? d.title : null}>
                                    <span className='Tital' style={{ width: '190px', display: 'block' }}>{d.title}</span>
                                </JDTooltip>
                                <span className='Time'>{d.createdTime}</span>
                            </div>
                            <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                                <div>
                                    <Icons type='author' />
                                    <span className='Author'>{d.author}</span>
                                </div>
                                <div className='Modify'>
                                    <JDTooltip placement="bottom" title={'Edit Post'}>
                                        <Icons type='Edit' style={{ marginRight: '5px' }} />
                                    </JDTooltip>
                                    <JDTooltip placement="bottom" title={'Delete Post'}>
                                        <Icons type='Delete' style={{ marginRight: '5px' }} onClick={() => Modal(d)} />
                                    </JDTooltip>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <JDModal Tital={'Delete Post'} modalField={ModalShow} SecondBTN={<JdButton key='1' className='Close' onClick={ModelOff} tital='Cancle' />} MainBTN={<JdButton key='0' className='MainBTN' onClick={Delete} tital='Delete' />} closebtn={false} Footer={true} centered={true}>
                    <div className='Modal' style={{ width: '485px', height: '100px', overflow: 'hidden' }}>
                        <span className='BodyText'>Are you sure to delete this post permenently</span>
                        <div className='d-flex'>
                            <div>
                                <Icons type='del_name' />
                            </div>
                            <span className='FileName'>{test === null ? null : test}</span>
                        </div>
                    </div>
                </JDModal>
            </div>
        </BlogWrapper>
    );
}
export default Blog;