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
        expect(ul).toMatchSnapshot(); 
    });
});


describe('Hey Arnold Detail Character Tests', () => {
    beforeAll(() => server.listen()); 
    afterAll(() => server.close());
    it('displays a single hey arnold character on the page', async() => {
        render(<MemoryRouter>
            <HeyArnoldDetail match={{
            params:{id: '5da237699734fdcb7bef8f51'}
         }}/>
         </MemoryRouter>);
         
    const figure = await screen.findByRole('individual')
    console.log(figure);

    expect(figure).not.toBeEmptyDOMElement(); 
    });
});