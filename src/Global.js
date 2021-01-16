import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
body{
  overflow: hidden;
}
.ant-tooltip-inner, .ant-tooltip-arrow-content {
  color: ${({ theme }) => theme.TooltipText};
  background-color: ${({ theme }) => theme.TooltipBG};
  font-family: Roboto-Light;
}
.ant-modal-footer{
  display: flex !important;
}
::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}
::-webkit-scrollbar-track {
  background: #2b2b2b;
}
 
::-webkit-scrollbar-thumb {
  background: #429FE4; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #32739B; 
}
::-webkit-scrollbar-corner { background: rgba(0,0,0,0.5); }
.ant-table-cell-scrollbar {
  box-shadow: 0 1px 0 1px #fafafa00 !important;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.ant-picker-cell-in-range-hover-start::before{
  background: red;
}
.Up > span{
  margin: 0px 10px;
}
.ant-upload.ant-upload-select {
  margin: 5px 0px 0px;
}
.Up{
  overflow: auto;
  width: calc(100vw - 140px);
  margin: 0px 10px;
  .ant-upload-list-item-name{
    color: ${({ theme }) => theme.Modal.HadText};
    line-height: 25px;
    font-size: 12px;
    font-family: Roboto-Light;
  }
  .ant-upload-list-text-container{
    margin: 0px 5px;
  }
  .ant-upload-list-item:hover{
    background-color: transparent !important;
  }
  .ant-upload-list, .ant-upload-list-text{
      margin: 10px 0px 0px;
      display: flex;
      overflow-x: auto;
      overflow-y: hidden;
  }
  .ant-upload-list-item-info {
    border-radius: 5px;
    color: ${({ theme }) => theme.Modal.BodyText} !important;
    background-color: ${({ theme }) => theme.Upload.BG} !important;
    padding: 0px 10px;
    span > div > span {
      display: none;
    }
  }
}

.ant-modal{
  width: fit-content !important;   
  #basic{
    .ant-row{
      .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-radio-group{
        margin: 5px 0px;
        padding: 0px 25px;
        .ant-radio-wrapper-checked > span{
          color: ${({ theme }) => theme.Modal.BodyText};
        }
        .ant-radio-wrapper{
          color: ${({ theme }) => theme.Modal.BodyText}68;
          .ant-radio > .ant-radio-inner{
            background-color: #fff0;
            border-color: ${({ theme }) => theme.Modal.BodyText};
          }
          .ant-radio-checked > .ant-radio-inner{
            border-color: ${({ theme }) => theme.Modal.RadioSelect} !important;
          }
        }
      }
    }
  }
  .ant-modal-content{
    background-color: ${({ theme }) => theme.Modal.Body};
    .ant-modal-close-x, .ant-modal-close{
      outline: none !important;
      border: none !important;
      line-height: 42px;
      height: 42px;
    }
    .ant-form-item-control-input-content{
      textarea::placeholder{
        padding: 4.5px 0px 0px !important;
      }
    }
    .ant-modal-footer{
      padding: 14px 24px;
    }
    .ant-modal-header, .ant-modal-footer{
      background-color: ${({ theme }) => theme.Modal.HadFooter};
      border: none;
      padding: 10px 24px;
      .ant-modal-title{
        font-size: 16px;
        font-family: 'Roboto-Medium';
        color: ${({ theme }) => theme.Modal.HadText};
        text-align: center;
        letter-spacing: 0.5px;
      }
    }
    .ant-modal-body{
      .Modal{
        font-family: 'Roboto-Regular';
        font-weight: 400;
        letter-spacing: 0.8px;
        padding: 20px 30px;
        overflow: auto;
        .ant-form-item-explain, .ant-form-item-explain-error > div{
          font-size: 12px;
        }
        .Passwordfiled{
          input{
            height: 30px;
            top: -11px;
          }
          .ant-form-item-children-icon{
            top: 25px;
          }
          .ant-input-affix-wrapper{
            border-radius: 6px;
           background-color: ${({ theme }) => theme.Modal.InputBG} !important;
           border: 1px solid ${({ theme }) => theme.Modal.inputborder} !important;
           height: 35px;
           margin-top: 8px;
           input{
            background-color: transparent!important;
            border: none !important;
           }
          }
        }
        .ant-input::placeholder, .ant-select-selection-placeholder{
          color: ${({ theme }) => theme.Signin.Text}65;
          font-family: Roboto-Light;
          font-size: 12px;
        }
                .DownloadD{
                  background-color: ${({ theme }) => theme.Modal.BTNTextSecond} !important;
                  color: ${({ theme }) => theme.Modal.BodyText} !important;
                  width: fit-content;
                  padding: 0px 10px 3px;
                  border-radius: 10px;
                  span > svg {
                    padding-top: 4px;
                  }
                }
                .Data{
                  color: ${({ theme }) => theme.Modal.BodyText} !important;
                  font-size: 11px;
                  letter-spacing: 0.75px;
                  font-family: Roboto-Regular;
                }
                .DataT{
                  color: ${({ theme }) => theme.Modal.BodyText} !important;
                  font-size: 12px;
                  font-family: Roboto-Regular;
                  letter-spacing: 0.75px;
                }
                .Tital{
                  color: ${({ theme }) => theme.Modal.HadText} !important;
                  font-size: 12px;
                  letter-spacing: 0.75px;
                  font-family: Roboto-Light;
                }
                .ant-form-item-label > label{
                  color: ${({ theme }) => theme.Modal.BodyText} !important;
                }
                .TitalModal{
                  display: contents;
                  height: 77px;
                  .ant-col, .ant-form-item-label{
                    label{
                      margin: 0px 0px;
                    }
                  }
                }
                .ant-upload-list-item:hover, .ant-upload-list-item-info:hover{
                  background-color: transparent !important;
                }
                .Selectpng{
                  height: 62px;
                  display: block;
                  .ant-upload-list-item-card-actions-btn.ant-btn-sm {
                    line-height: 1.99;
                  }
                  
                  .ant-upload-list-item {
                    height: 23px;
                    font-size: 12px;
                    margin-top: 6px;
                }
                  .ant-col, .ant-form-item-label{
                    label{
                      margin: 0px 0px 6px;
                    }
                  }
                }
                .ContentData{
                  height: fit-content;
                  padding: 8px 0px !important;
                  margin-top: 5px !important;
                  .ant-col, .ant-form-item-label{
                    label{
                      margin: 0px 0px 6px;
                    }
                  }
                }
                .UploadFile{
                  height: 90px;
                  display: contents;
                  .ant-upload-span{
                    width: 130px;
                  }
                  .ant-upload-list-item-card-actions-btn,.ant-btn-sm {
                    line-height: 1.99;
                  }
                  .ant-upload-list-text{
                    display: flex;
                    overflow-x: auto;
                    overflow-y: hidden;
                  }
                  .ant-col, .ant-form-item-label{
                    label{
                      margin: 0px 0px 6px;
                    }
                  }
                }
                .SelectHash{
                  height: 82px;
                  display: block;
                  margin-top: 5px;
               
                  .ant-col, .ant-form-item-label{
                    label{
                      margin: 6px 0px 6px;
                    }
                  }
                }
                .ant-form-item {
                  margin: 0px 0px;
                  padding: 2px 0px;
                  .ant-col{
                    padding: 0 0 0px;
                  }
                }
        .imageSaid{
          display: grid;
          width: -webkit-fill-available;
          padding-left: 35px;
          height: fit-content;
          margin-top: 68px;
          span {
            margin: 5px 0px;
          }
        }
       .BodyText, .ant-input{
          color: ${({ theme }) => theme.Modal.BodyText} !important;
          margin: 8px 0px;
          display: flex;
          font-size: 16px;
          letter-spacing: 0.75px;
          font-family: 'Roboto-Regular';
        }
        .ant-upload-list-item-name, .ant-select-selection-item{
          color: ${({ theme }) => theme.Modal.HadText};
          line-height: 25px;
          font-size: 12px;
          font-family: Roboto-Light;
        }
        .ant-upload-list-item{
          margin-top: 14px;
          .ant-upload-span{
            border-radius: 5px;
            padding: 0px 10px;
            color: ${({ theme }) => theme.Modal.BodyText} !important;
            background-color: ${({ theme }) => theme.Modal.InputBG} !important;
          }
          .ant-btn > .anticon {
            margin-bottom: 1px;
        }
        .anticon-paper-clip{
          display: none;
        }
        }
        .ant-select-selection-item-remove{
          line-height: 1.9;
        }
        .Select{
          color: ${({ theme }) => theme.Modal.BodyText}88 !important;
          background-color: ${({ theme }) => theme.Modal.Select} !important;
          border: none;
          border-radius: 5px;
        }
        .ant-input, .ant-select-selector{
          border-radius: 6px;
          background-color: ${({ theme }) => theme.Modal.InputBG} !important;
          border: 1px solid ${({ theme }) => theme.Modal.inputborder} !important;
        }
        .FileName{
          color: ${({ theme }) => theme.Modal.DeleteTital} !important;
          text-overflow: ellipsis;
          width: 210px;
          white-space: nowrap;
          font-family: Roboto-Light;
          position: relative;
          bottom: 2px;
          left: 9px;
          overflow: hidden;
        }
       
      }
    }
    .ant-modal-footer{
      justify-content: flex-end;
      font-family: Roboto-Light;
      .Close, .MainBTN{
        border: none;
        margin: 0px 5px;
        width: fit-content;
        height: 33px;
        padding: 0px 15px;
        border-radius: 5px;
      }
      .MainBTN{
        background-color: ${({ theme }) => theme.Modal.MainBTN} !important;
        color: ${({ theme }) => theme.Modal.BTNTextSecond} !important;
      }
      .Close{
        background-color: ${({ theme }) => theme.Modal.BTNTextSecond} !important;
        color: ${({ theme }) => theme.Modal.BodyText} !important;
      }
    }
  }
}
.ant-select-dropdown, .ant-select-item-option-selected, .ant-select-item-option-active{
  color: ${({ theme }) => theme.Modal.BodyText} !important;
  background-color: ${({ theme }) => theme.Modal.SelectFind} !important;
}
.ant-select-multiple .ant-select-selection-item, .ant-select-selection-search-input{
  color: ${({ theme }) => theme.Modal.HadText} !important;
  background-color: ${({ theme }) => theme.Modal.SelectInput} !important;
  border: none;
}
.anticon, .anticon-close, .ant-select-multiple .ant-select-selection-item-remove > .anticon{
  // color: ${({ theme }) => theme.Modal.HadText} !important;
  vertical-align: null;
}
.ant-modal-close-x, .anticon-eye-invisible, .ant-select-arrow, .anticon-close{
  color: ${({ theme }) => theme.Modal.HadText} !important;
  vertical-align: null;
}
.ant-select-dropdown{
  background-color: ${({ theme }) => theme.Modal.InputBG} !important;
  .rc-virtual-list > .rc-virtual-list-holder > div > .rc-virtual-list-holder-inner{
    .ant-select-item, .ant-select-item-option-selected{
      color: ${({ theme }) => theme.Modal.BodyText} !important;
    }
    .ant-select-item-option-active:hover, .ant-select-item-option-active{
      background-color: ${({ theme }) => theme.Modal.SelectFindHover} !important;
    }
    .ant-select-item-option-selected{
      background-color: ${({ theme }) => theme.Modal.SelectFind} !important;
      color: red;
    }
  }
  .ant-empty{
    .ant-empty-description{
      color: ${({ theme }) => theme.Modal.BodyText}68;
    }
  }
}
.SelectOver > div > .ant-form-item > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select-single > .ant-select-selector > .ant-select-selection-item{
  line-height: 30px !important;
}
.ant-form-item-children-icon{
  line-height: 15.5px !important;
}
.d-flex{
  display: flex;
}
.ant-menu-vertical .ant-menu-item, .ant-menu-vertical-left .ant-menu-item, .ant-menu-vertical-right .ant-menu-item, .ant-menu-inline .ant-menu-item, .ant-menu-vertical .ant-menu-submenu-title, .ant-menu-vertical-left .ant-menu-submenu-title, .ant-menu-vertical-right .ant-menu-submenu-title, .ant-menu-inline .ant-menu-submenu-title {
  height: 0px;
  margin-top: 0px; 
  margin-bottom: 0px; 
  padding: 0 0px; 
  overflow: hidden; 
  line-height: 0px; 
  text-overflow: unset; 
}
.ant-menu-vertical .ant-menu-item:not(:last-child), .ant-menu-vertical-left .ant-menu-item:not(:last-child), .ant-menu-vertical-right .ant-menu-item:not(:last-child), .ant-menu-inline .ant-menu-item:not(:last-child) {
 margin-bottom: 0px;
}
.ErrorM{
    color: red;
    font-size: 12px;
    font-family: 'Roboto-Regular';
    position: relative;
    top: 5px;
}
.ant-notification-notice {
  background: #333;
  .ant-notification-notice-message, .ant-notification-notice-icon-error, .ant-notification-close-x > span {
    color: rgb(255 95 95) !important;
  }
}
.ant-popover-inner, .ant-popover-title, .ant-card-cover{
  border-bottom: 1px solid ${({ theme }) => theme.Pop.Border} !important;
  background: ${({ theme }) => theme.Pop.Back};
}
.ant-popover-placement-bottom > .ant-popover-content > .ant-popover-arrow, .ant-popover-placement-bottomRight > .ant-popover-content > .ant-popover-arrow {
  border-top-color: ${({ theme }) => theme.Pop.Back};
  border-left-color: ${({ theme }) => theme.Pop.Back};
  box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
  left: 65%;
}
.ant-popover {
  text-align: center !important;
}
.ant-popover-title {
  min-width: 100px !important;
}
.logoutbtn{
  background-color: ${({ theme }) => theme.TooltipBG};
  color: ${({ theme }) => theme.Modal.HadText}65 !important;
  border: 1px solid ${({ theme }) => theme.Pop.Border} !important;
}
.logoutbtn:hover{
  background-color: ${({ theme }) => theme.TooltipBG};
  color: ${({ theme }) => theme.Modal.HadText} !important;
}
.ant-form-item-children-icon{
  margin-top: -7px !important;
}


.ant-picker-range-arrow::after {
  border: 5px solid ${({ theme }) => theme.Date.Border} !important;
  border-color: ${({ theme }) => theme.Date.Border} ${({ theme }) => theme.Date.Border} transparent transparent !important;
}
.ant-picker-cell:hover:not(.ant-picker-cell-in-view) .ant-picker-cell-inner, .ant-picker-cell:hover:not(.ant-picker-cell-selected):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end):not(.ant-picker-cell-range-hover-start):not(.ant-picker-cell-range-hover-end) .ant-picker-cell-inner{
  background: ${({ theme }) => theme.Date.select} !important;
}
.ant-picker-panel-container {
  background: ${({ theme }) => theme.Date.BGOne} !important;
  .ant-picker-panel {
    border-bottom: 1px solid ${({ theme }) => theme.Date.Border} !important;
  }
  .ant-picker-header, .ant-picker-footer-extra:not(:last-child){
    color: ${({ theme }) => theme.Date.text}67 !important;
    border-bottom: 1px solid ${({ theme }) => theme.Date.Border} !important;
  }

  .ant-picker-header button{
    color: ${({ theme }) => theme.Date.text}67 !important;
  }
  .ant-picker-datetime-panel, .ant-picker-time-panel, .ant-picker-time-panel-column {
    border-left: 1px solid ${({ theme }) => theme.Date.Border};
}
  .ant-picker-content th {
      color: ${({ theme }) => theme.Date.text}77 !important;
  }
  .ant-picker-cell {
    color: ${({ theme }) => theme.Date.text}24;
  }
  .ant-picker-cell-in-view {
    color: ${({ theme }) => theme.Date.text}86;
  }
  .ant-picker-time-panel-cell-inner{
    color: ${({ theme }) => theme.Date.text}86 !important;
  }
  .ant-picker-time-panel-cell-selected > .ant-picker-time-panel-cell-inner{
    background: ${({ theme }) => theme.Date.text}10 !important;
  } 
  .ant-picker-time-panel-column > li.ant-picker-time-panel-cell .ant-picker-time-panel-cell-inner:hover, .ant-picker-cell-in-view.ant-picker-cell-in-range::before, .ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single)::before, .ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single)::before{
    background: ${({ theme }) => theme.Date.text}10 !important;
  }
  .ant-picker-cell-disabled::before{
    background: ${({ theme }) => theme.Date.text}05 !important;
  }
  .ant-picker-cell-disabled .ant-picker-cell-inner{
    color: ${({ theme }) => theme.Date.text}21 !important;
  }
  .ant-picker-cell-disabled{
    color: ${({ theme }) => theme.Date.text}21 !important;
  }
}
.ant-message-notice-content {
  background: #368a23;
  .anticon, .anticon-close, .ant-select-multiple .ant-select-selection-item-remove > .anticon {
    color: #41da2f !important;
    vertical-align: null;
}
}
   
.FontStyle{
  .ant-btn, .Draft_Btn{
      background-color: transparent !important;
  }
}
.ant-btn-primary[disabled], .ant-btn-primary[disabled]:hover, .ant-btn-primary[disabled]:focus, .ant-btn-primary[disabled]:active {
  background: ${({ theme }) => theme.Pop.Back};
  border-color: transparent;
  color: ${({ theme }) => theme.Meeting.CardTitle}85;
  opacity: 0.57;
}

.Datepiker{
  .ant-picker-range{
    background-color: ${({ theme }) => theme.Meeting.CreateMeeting.InputBG};
    border: 1px solid ${({ theme }) => theme.Meeting.CreateMeeting.InputBorder}2b;
    color: ${({ theme }) => theme.Meeting.CreateMeeting.Title};
    .anticon-swap-right{
      color: ${({ theme }) => theme.Page.Users.ButtonBG};
  }
  .ant-picker-input > input{
    color: ${({ theme }) => theme.TaskManagement.Tital}bf !important;
}
  }
  padding: 0px 0px 0px 20px;
  margin-bottom: 10px;
  font-family: 'Roboto-Regular';
  font-size: 12px;
  color: ${({ theme }) => theme.TaskManagement.Tital}bf;
  input{
    border: 1px solid transparent !important;
}
}
.selectover{
  .ant-select-selection-item-remove{
    line-height: 26px !important;
  }
}
  `;
export default GlobalStyles;