import React, { Component } from 'react'
import { Editor, EditorState, RichUtils } from 'draft-js';
import { DraftWrapper } from './JdDraftStyle'
import { Button } from 'antd'
import { JdSelect, JdOption, Icons } from '../Index'

export class JdDraft extends Component {
  constructor(props) {
    super(props);

    this.toggleColor = (toggledColor) => this._toggleColor(toggledColor);

    this.state = { editorState: EditorState.createEmpty() };

    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({ editorState });

    this.handleKeyCommand = (command) => this._handleKeyCommand(command);
    this.onTab = (e) => this._onTab(e);
    this.toggleBlockType = (type) => this._toggleBlockType(type);
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
  }

  _handleKeyCommand(command) {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _onTab(e) {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }

  render() {
    const { editorState } = this.state;
    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return (
      <DraftWrapper className="RichEditor-root">
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', marginRight: '10px' }}>
            <BlockStyleControls
              editorState={editorState}
              onToggle={this.toggleBlockType}
            />
            <StyleBTN
              editorState={editorState}
              onToggle={this.toggleInlineStyle}
            />

          </div>
          <InlineStyleControls
            editorState={editorState}
            onToggle={this.toggleInlineStyle}
          />

        </div>
        <div className={className} onClick={this.focus}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            onTab={this.onTab}
            ref="editor"
            spellCheck={false}
          />
        </div>
      </DraftWrapper>
    );
  }
}
// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
  PX_12: {
    fontSize: 12,
  },
  PX_16: {
    fontSize: 16,
  },
  PX_22: {
    fontSize: 22,
  },
  PX_26: {
    fontSize: 26,
  },
  PX_32: {
    fontSize: 32,
  },
  PX_36: {
    fontSize: 36,
  },
  PX_42: {
    fontSize: 42,
  },
  PX_46: {
    fontSize: 46,
  },
  PX_52: {
    fontSize: 52,
  },
  PX_56: {
    fontSize: 56,
  },
};


function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
}

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {

    let className = 'RichEditor-styleButton';
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return (
      <Button className='Draft_Btn' onMouseDown={this.onToggle}>
        <span className={className} >
          <Icons type={this.props.Icons}>
          </Icons>
        </span>
      </Button>
    );
  }
}


const BLOCK_TYPES = [
  { label: 'Blockquote', style: 'blockquote', Icons: 'Block_Quote' },
  { label: 'UL', style: 'unordered-list-item', Icons: 'bullet_list' },
  { label: 'OL', style: 'ordered-list-item', Icons: 'number_list' },
  { label: 'Code Block', style: 'code-block', Icons: 'Code_Block' },
];

const BlockStyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
          Icons={type.Icons}
        />
      )}
    </div>
  );
};
// inline ///
var INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD', Icons: 'Bold' },
  { label: 'Italic', style: 'ITALIC', Icons: 'Italic' },
  { label: 'Underline', style: 'UNDERLINE', Icons: 'Underline' },
  { label: 'Monospace', style: 'CODE', Icons: 'Monospace' },
];

const InlineStyleControls = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
          Icons={type.Icons}
        />
      )}
    </div>
  );
};

class StyleBTN extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      console.log(e);
      this.props.onToggle(e);
    };
  }

  render() {
    var INLINE_FONT = [
      { label: '12px', style: 'PX_12' },
      { label: '16px', style: 'PX_16' },
      { label: '22px', style: 'PX_22' },
      { label: '26px', style: 'PX_26' },
      { label: '32px', style: 'PX_32' },
      { label: '36px', style: 'PX_36' },
      { label: '42px', style: 'PX_42' },
      { label: '46px', style: 'PX_46' },
      { label: '52px', style: 'PX_52' },
      { label: '56px', style: 'PX_56' },
    ];
    return (
      <JdSelect onSelect={this.onToggle} style={{ marginTop: '5px' }} defaultValue={'12px'}>
        {INLINE_FONT.map((type, i) => (
          <JdOption key={i} value={type.style}>{type.label}</JdOption>
        ))}
      </JdSelect>
    );
  }
}

