import React, { useEffect } from 'react';

export function createHoc() {
  // to render queue
  const renderQueue = [];

  return function Hoc(Component) {
    function RenderController(props) {
      const { renderNextComponent, ...otherProps } = props;

      useEffect(() => {
        renderNextComponent();
      });

      return <Component {...otherProps} />;
    }

    return class Wrap extends React.Component {
      constructor() {
        super();
        this.state = { isRender: false };
        const tryRender = () => {
          this.setState({ isRender: true });
        };

        if (renderQueue.length === 0) {
          this.isFirstRender = true;
        }
        renderQueue.push(tryRender);
      }

      // 是否是队列中的第一个挂载任务
      isFirstRender = false;

      renderNextComponent = () => {
        if (renderQueue.length > 0) {
          console.log('Mount next component...');
          const nextRender = renderQueue.shift();
          nextRender();
        }
      };

      componentDidMount() {
        this.isFirstRender && this.renderNextComponent();
      }

      render() {
        const { isRender } = this.state;

        return isRender ? (
          <RenderController
            {...this.props}
            renderNextComponent={this.renderNextComponent}
          />
        ) : (
          <div>Loading</div>
        );
      }
    };
  };
}
