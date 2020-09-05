import { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentBeat } from '@features/metronome/metronome.slice';
import Metronome from '@utils/Metronome';

class MetronomeComponent extends Component {
    constructor(props) {
        super(props);
        const { setCurrentBeat } = this.props;
        this.metronome = new Metronome(() => {
            setCurrentBeat(this.metronome.currentBeat);
        });
    }

    componentDidUpdate(prevProps) {
        const { isPlaying, bpm } = this.props;
        const { isPlaying: prevIsPlaying, bpm: prevBpm } = prevProps;

        if (isPlaying !== prevIsPlaying) {
            this.metronome.toggleStart();
        } else if (bpm !== prevBpm) {
            this.metronome.bpm = bpm;
        }
    }

    render() {
        return null;
    }
}

const mapStateToProps = ({ metronome: { isPlaying, bpm } }) => ({
    isPlaying,
    bpm,
});

export default connect(mapStateToProps, { setCurrentBeat })(MetronomeComponent);
