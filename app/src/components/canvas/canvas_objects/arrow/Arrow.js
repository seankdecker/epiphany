import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Group, Tween, Transformer, RegularPolygon } from 'react-konva';
import Konva from 'konva';


// Todo: Transformer support
class Arrow extends React.Component {
    constructor(props) {
        super(props);
    }

    // Add cursor styling
    onMouseOver() {
        document.body.style.cursor = 'pointer';
    }
    onMouseOut() {
        document.body.style.cursor = 'default';
    }

    // Raising and lowering animations
    onDragStart(e) {
        e.target.to({
            scaleX: 1.1 * e.target.attrs.scaleX,
            scaleY: 1.1 * e.target.attrs.scaleY,
                shadowOffsetX: 15,
                shadowOffsetY: 15,
            easing: Konva.Easings.ElasticEaseOut,
        });
        e.target.moveToTop();
        e.target.getStage().findOne('Transformer').moveToTop();
    }

    onDragEnd(e) {
        e.target.to({
            scaleX: e.target.attrs.scaleX / 1.1,
            scaleY: e.target.attrs.scaleY / 1.1,
            easing: Konva.Easings.ElasticEaseOut,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
        });
    };

    render() {
        return (
            <Group
                draggable={true}
                id={this.props.id.toString()}
                x={100}
                y={100}
                onMouseOver={(e) => this.onMouseOver(e)}
                onMouseOut={(e) => this.onMouseOut(e)}
                onDragStart={(e) => this.onDragStart(e)}
                onDragEnd={(e) => this.onDragEnd(e)}
                >
                <Rect
                    width={300}
                    height={20}
                    fill={'black'}
                    shadowColor={'black'}
                    />
                <RegularPolygon
                    width={150}
                    height={20}
                    radius={50}
                    y={10}
                    fill={'black'}
                    shadowColor={'black'}
                    sides={3}
                    rotation={-90}
                >
                </RegularPolygon>
            </Group>
        )
    }
}

export default Arrow;