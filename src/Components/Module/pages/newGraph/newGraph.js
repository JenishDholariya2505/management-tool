import React, { useState } from 'react'
import { NewGraphWrapper } from './GraphStyle'
import { JdChart, JDSpin, JdFormComponents } from '../../components/Index'
import neo_Array from '../../components/Chart/newGraph/NewTest.json'
const { Neo4j } = JdChart
const { JdButton } = JdFormComponents
export default function NewGraph() {
    const uiConfig = neo_Array.configuration
    const [view, Setview] = useState({ user: false, post: false, comments: false, postRelationDetails: false, childRelationDetails: false, perentRelationDetails: false })
    const sizetoggle = uiConfig[Object.entries(view)[0][0]].name
    const [config, setConfig] = useState(uiConfig)
    const [loading, setLoading] = useState(false)
    const close = () => {
        Setview({ user: false, post: false, comments: false, postRelationDetails: false, childRelationDetails: false, perentRelationDetails: false })
    }
    const user = (type) => {
        close()
        Setview({ [type]: !view[type] })
    }
    const SkinFun = (Skin) => {
        setConfig({ ...config, defaultColor: config[Object.entries(view)[0][0]].defaultColor = Skin })
    }
    const SizeFun = (s_Name) => {
        setConfig({ ...config, defaultSize: config[Object.entries(view)[0][0]].defaultSize = s_Name })
    }
    const CaptionFun = (c_Name) => {
        setConfig({ ...config, defaultCaption: config[Object.entries(view)[0][0]].defaultCaption = c_Name })
    }
    return (
        <NewGraphWrapper>
            <div className='graphbox'>
                <div className='btnstore'>
                    {Object.keys(neo_Array.configuration).map((d, i) => (
                        <JdButton key={i} className={view[d] ? 'nodebtn active' : 'nodebtn'} onClick={() => user(d)} tital={d} />
                    ))}
                </div>
                {loading ? <JDSpin spinning={loading} delay={500} /> : <div id='neo4j' style={{ width: 'calc(100vw - 102px)', height: 'calc(100vh - 230px)' }} className='addgraph' />}
                <Neo4j Neo4j_Data={neo_Array} styleConfig={config} />
                <div className='modify' style={{ display: (view.user || view.post || view.comments || view.postRelationDetails || view.childRelationDetails || view.perentRelationDetails ? '' : 'none') }}>
                    <div className='innerdata'>
                        <div className='View_Name'><span>{sizetoggle}</span></div>
                        {/* skin update  */}
                        <div className='SkinUpdate'>
                            <span className='Title'>Color</span>
                            {uiConfig[Object.entries(view)[0][0]].color.map((Skin, i) => (
                                <div className={Skin === config[Object.entries(view)[0][0]].defaultColor ? 'skin activeskin' : 'skin'} onClick={() => SkinFun(Skin)} style={{ backgroundColor: Skin }} key={i} />
                            ))}
                        </div>
                        {/* size update */}
                        <div className='Scale'>
                            <span className='Title'>Size</span>
                            <div className={(sizetoggle === 'User_Post_Relation' || sizetoggle === 'User_Comments_Relation' || sizetoggle === 'Post_Comments_Relation') ? 'sizeModify' : ''}>
                                {uiConfig[Object.entries(view)[0][0]].size.map((s_Name, i) => (
                                    <span className={s_Name === config[Object.entries(view)[0][0]].defaultSize ? 'Size activesize' : 'Size'} onClick={() => SizeFun(s_Name)} style={{ padding: s_Name / 1.5 + "px", height: s_Name - 0.2 }} key={i} />
                                ))}
                            </div>
                        </div>
                        {/* caption update  */}
                        <div className='Caption'>
                            <span className='Title'>{sizetoggle === 'User_Post_Relation' ? 'Labels' : 'Captions'}</span>
                            {uiConfig[Object.entries(view)[0][0]].captions.map((c_Name, i) => (
                                <span onClick={() => CaptionFun(c_Name)} className={c_Name === config[Object.entries(view)[0][0]].defaultCaption ? 'captionbtn activecap' : 'captionbtn'} key={i}>
                                    {c_Name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </NewGraphWrapper>
    )
}
