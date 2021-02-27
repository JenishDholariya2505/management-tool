import React, { useState } from 'react'
import { TaskManageWrapper } from './Task-ManagementStyle';
import { JDDescriptions, JdFormComponents, JdChart, JDSpin } from '../../components/Index';
import { Link } from 'react-router-dom'
import Data from '../../components/Chart/Network/data.json'

const { JdButton } = JdFormComponents
const { NetworkChart } = JdChart
export default function TaskManagement() {
    let defaultConfig = Data.configuration
    const [configurationadd, setConfigurationadd] = useState([
        {
            parent: {
                size: defaultConfig.parent.defaultSize,
                color: defaultConfig.parent.defaultColor,
                textColor: '#000',
                defaultCaption: defaultConfig.parent.defaultCaption
            }
        },
        {
            child: {
                size: defaultConfig.child.defaultSize,
                color: defaultConfig.child.defaultColor,
                textColor: '#000',
                defaultCaption: defaultConfig.child.defaultCaption
            }
        },
        {
            relation: {
                color: defaultConfig.relation.defaultlineColor,
                size: defaultConfig.relation.defaultlineWidth,
                defaultCaption: defaultConfig.relation.defaultCaption
            }
        }
    ])

    const [ChangeArray, setChangeArray] = useState('parent')
    const [end, setstart] = useState(0)
    const [index, setindex] = useState(0)
    const [view, Setview] = useState({ parent: false, child: false, relation: false })
    const SkinFun = (d) => {
        let datastore = configurationadd;
        datastore[index][Object.entries(view)[0][0]]['color'] = d
        setConfigurationadd(datastore)
        setstart(end + 1)
    }
    const SizeFun = (d) => {
        let datastore = configurationadd;
        datastore[index][Object.entries(view)[0][0]]['size'] = d
        setConfigurationadd(datastore)
        setstart(end + 1)
    }
    const CaptionFun = (d) => {
        let datastore = configurationadd;
        datastore[index][Object.entries(view)[0][0]]['defaultCaption'] = d
        setConfigurationadd(datastore)
        setstart(end + 1)
    }
    const viewnode = () => {
        setindex(0)
        setChangeArray('parent')
        Setview({ parent: !view.parent })
    }
    const viewlink = () => {
        setindex(1)
        setChangeArray('child')
        Setview({ child: !view.child })
    }
    const viewrelation = () => {
        setindex(2)
        setChangeArray('relation')
        Setview({ relation: !view.relation })
    }

    return (
        <TaskManageWrapper>
            <div className='d-flex Box'>
                <JDDescriptions title="Task-Management" />
                <Link to='/ZeronSec/Task-Management/Add'>
                    <JdButton tital='Create' />
                </Link>
            </div>
            <div className='graphbox'>
                <div className='btnstore'>
                    <JdButton className={view.parent ? 'nodebtn active' : 'nodebtn'} onClick={viewnode} tital='Product' />
                    <JdButton className={view.child ? 'nodebtn active' : 'nodebtn'} onClick={viewlink} tital='Oders' />
                    <JdButton className={view.relation ? 'nodebtn active' : 'nodebtn'} onClick={viewrelation} tital='Relation' />
                </div>
                {Data.data.length === 0 ? <JDSpin spinning={true} delay={500} /> : <div style={{ width: 'calc(100vw - 102px)', height: 'calc(100vh - 230px)' }} id='net' className='graphset' />}
                <NetworkChart nodeD={Data.data} Config={configurationadd} />
                <div className='modify' style={{ display: (view.parent || view.child || view.relation ? '' : 'none') }}>
                    <div className='innerdata'>
                        <div className='View_Name'><span>{Data.configuration[ChangeArray].name}</span></div>
                        <div className='SkinUpdate'>
                            <span className='Title'>Color</span>
                            {Data.configuration[ChangeArray].color.map((Skin, i) => (
                                <div className={Skin === configurationadd[index][Object.entries(view)[0][0]].color ? 'skin activeskin' : 'skin'} onClick={() => SkinFun(Skin)} style={{ backgroundColor: Skin }} key={i} />
                            ))}
                        </div>
                        <div className='Scale'>
                            <span className='Title'>Size</span>
                            <div className={Data.configuration[ChangeArray].name === 'Relation' ? 'sizeModify' : ''}>
                                {Data.configuration[ChangeArray].size.map((s_Name, i) => (
                                    <span className={s_Name === configurationadd[index][Object.entries(view)[0][0]].size ? 'Size activesize' : 'Size'} onClick={() => SizeFun(s_Name)} style={{ padding: s_Name / 1.5 + "px", height: s_Name - 0.2 }} key={i} />
                                ))}
                            </div>
                        </div>
                        <div className='Caption'>
                            <span className='Title'>{Data.configuration[ChangeArray].name === 'Relation' ? 'Labels' : 'Captions'}</span>
                            {Data.configuration[ChangeArray].captions.map((c_Name, i) => (
                                <span onClick={() => CaptionFun(c_Name)} className={c_Name === configurationadd[index][Object.entries(view)[0][0]].defaultCaption ? 'captionbtn activecap' : 'captionbtn'} key={i}>
                                    {c_Name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </TaskManageWrapper>
    )
}
