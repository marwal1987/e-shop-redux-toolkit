# Vecka 37: State Management med Redux Toolkit och individuell projektutveckling

## Tema:
Vidareutveckling av React-applikationer med fokus på Redux Toolkit för state management.

## Projekt:
Utveckla din egen interaktiva webbapplikation med Redux Toolkit som state management-verktyg. Du kan antingen bygga vidare på ett tidigare projekt eller starta ett nytt projekt från grunden.

### Beskrivning:
Du ska skapa eller vidareutveckla en webbapplikation (kan vara något vi gjort tidigare i kursen som till exempel från ett tidigare gruppprojekt) där du använder Redux Toolkit för att hantera applikationens state. Applikationen ska inkludera en eller flera funktioner som kräver state management, till exempel:

- Användarinteraktioner
- Datahantering via API-anrop (Välj valfritt, men rekommendationen är att ni väljer ett av de bättre API:er ni redan jobbat med)
- Dynamiskt uppdaterade vyer

### Krav för applikationen:

1. **Redux Store med Redux Toolkit:**
   - Skapa och konfigurera en central Redux Store med hjälp av `configureStore` från Redux Toolkit.

2. **Slices för Actions och Reducers:**
   - Använd Redux Toolkit's `createSlice` för att definiera både actions och reducers i samma modul. Slicen ska innehålla minst två reducers som påverkar state.

3. **State Management:**
   - Hantera minst ett centralt state-objekt (t.ex. användardata, produktlista, uppgifter) med hjälp av Redux Toolkit.

4. **Fetch API och Async Thunks:**
   - Använd Redux Toolkit's `createAsyncThunk` för att integrera API-anrop och hantera asynkrona operationer, där data hämtas och lagras i Redux store.

5. **React-Redux:**
   - Använd `useSelector` och `useDispatch` för att hämta och uppdatera data från Redux store i dina komponenter.

### Extra funktionalitet (frivilligt):
- Implementera en sökfunktion som hämtar och filtrerar data från ett API och hanterar det via Redux Toolkit.
- Hantera användarens session med autentisering och lagring av användarinformation i Redux Toolkit.
- Skapa en funktion som låter användare redigera och radera data (exempelvis redigera en profil eller radera en uppgift), med Redux Toolkit's slices och CRUD-operationer.

## Veckans ämnen du ska visa att du har kunskap om:

1. **Redux Toolkit Actions och Reducers:**
   - Implementera och förklara hur actions och reducers skapas och används i applikationen via `createSlice`.

2. **Redux Store och Selectors:**
   - Förstå och visa hur applikationens state hanteras och uppdateras med hjälp av en central Redux store skapad med Redux Toolkit. Använd `useSelector` för att hämta data från store.

3. **Async Thunks för API-anrop:**
   - Implementera `createAsyncThunk` för att hantera asynkrona API-anrop och lagra datan i Redux store.

4. **Eventhantering i React:**
   - Implementera eventhantering som interagerar med Redux Toolkit för att uppdatera applikationens state.

5. **Fetch API och JSON-hantering:**
   - Hämta data från ett externt API via `createAsyncThunk` och lagra den i Redux store. Förstå hur data hämtas och används i applikationen.

## Individuell presentation:
Varje student kommer att presentera sitt projekt individuellt, med fokus på den kod som de har skrivit. Du ska kunna förklara hur din implementation av Redux Toolkit fungerar och visa hur dina actions, reducers och async thunks är kopplade till applikationens funktionalitet.

### Deadline:
Individuella presentationer ska lämnas in senast måndag före lektionsstart eller göras live på måndagslektionen.

**OBS!!! Ingen rapport behövs denna vecka.**
