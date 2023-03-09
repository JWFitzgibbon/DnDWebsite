import React, { Component } from 'react';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { characters: [], abilities: [], loading: true };
    }

    componentDidMount() {
        this.populateCharacterData();
        this.populateAbilityData();
    }

    static renderTable(characters, abilities) {
        return (
            <>
            <h2>Characters</h2>
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Archetype</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    {characters && characters.map(character => <tr key={character.id}>
                        <td>{character.name}</td>
                        <td>{character.class}</td>
                        <td>{character.archetype}</td>
                        <td>{character.level}</td>
                    </tr>
                    )}
                </tbody>
            </table>

            <h2>Abilities</h2>
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Class</th>
                        <th>Level</th>
                    </tr>
                </thead>
                <tbody>
                    {abilities && abilities.map(ability => <tr key={ability.id}>
                        <td>{ability.name}</td>
                        <td>{ability.description}</td>
                        <td>{ability.class}</td>
                        <td>{ability.level}</td>
                    </tr>
                    )}
                </tbody>
            </table></>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
            : App.renderTable(this.state.characters, this.state.abilities);

        return (
            <div>
                <h1 id="tabelLabel" >D&D Main Page</h1>
                <p>List of characters and abilities saved in the database</p>
                {contents}
            </div>
        );
    }

    async populateCharacterData() {
        const response = await fetch('characters');
        const data = await response.json();
        this.setState({ characters: data, loading: false });
        console.log(data);
    }

    async populateAbilityData() {
        const response = await fetch('abilities');
        const data = await response.json();
        this.setState({ abilities: data, loading: false });
        console.log(data);
    }
}
