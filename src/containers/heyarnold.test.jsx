import React from 'react'; 
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import HeyArnold from './HeyArnold' 
import mockCharacterData from '../../fixtures/mockCharacterData.json'
import {MemoryRouter} from 'react-router';
import HeyArnoldDetail from './HeyArnoldDetail';

// import userEvent from '@testing-library/user-event'
import CharacterDetail from '../components/characters/CharacterDetail'
// import HeyArnoldDetail from './HeyArnoldDetail'


const server = setupServer(
    rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters', (req, res, ctx) => {
        return res(ctx.json(mockCharacterData)); 
    })
); 

const server2 = setupServer(
    rest.get('https://hey-arnold-api.herokuapp.com/api/v1/characters/5da237699734fdcb7bef8f51', (req, res, ctx) => {
        return res(ctx.json(mockCharacterData2)); 
    })
); 


describe('Hey Arnold Container', () => {
    beforeAll(() => server.listen()); 
    afterAll(() => server.close()); 

    it('displays hey arnold character/quotes on load', async() => {
        render(<MemoryRouter>
            <HeyArnold />
        </MemoryRouter>
        );

        const ul = await screen.findByRole('list', { name: 'character-list'})
        console.log(ul);
        expect(ul).toMatchSnapshot(); 
    });
});


describe('Hey Arnold Detail Character Tests', () => {
    beforeAll(() => server.listen()); 
    afterAll(() => server.close());
    it('displays a single hey arnold character on the page', async() => {
        // render(<HeyArnoldDetail />);
        render(<CharacterDetail name="Arnold Shortman" image="https://vignette.wikia.nocookie.net/heyarnold/images/f/f5/Arnold.png/revision/latest?cb=20181027162333" />);
         
    const figure = await screen.findByRole('individual')

    expect(figure).not.toBeEmptyDOMElement(); 
    });
});