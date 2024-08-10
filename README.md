# AlgorithmArtisan

## Description
**AlgorithmArtisan** is a web application that allows users to generate custom poster images based on two user inputs: a movie title and an art style. The application leverages OpenAI's DALL-E 3 API to produce high-quality, AI-generated images dynamically, providing users with unique and visually appealing movie posters tailored to their specifications.

The application features a seamless user experience, with an intuitive HTML and CSS front-end where users can easily input their desired movie title and art style. On the technical side, the application employs an asynchronous JavaScript function to handle API calls, ensuring efficient and responsive image generation.

## Features
- **OpenAI DALL-E 3 API Integration**: Utilizes advanced AI technology to generate custom images based on user-provided inputs.
- **Asynchronous JavaScript**: Handles API calls efficiently, providing quick and responsive interactions.
- **HTML and CSS Front-End**: Offers a user-friendly interface for entering movie titles and selecting art styles.
- **Dynamic Poster Creation**: Generates unique movie posters in real-time, tailored to user specifications.

## Installation

### Prerequisites
- A web browser (e.g., Chrome, Firefox, Edge)
- Node.js installed on your machine (optional for running the app locally)
- OpenAI API key (required for API access)

### Clone the Repository
To set up this project locally, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/AlgorithmArtisan.git

   cd AlgorithmArtisan

2. **Install Dependencies (Optional):**
If you plan to run the application locally using a Node.js server, install the required dependencies:

        npm install


3. **Set Up Environment Variables:**
Create a .env file in the project root directory and add your OpenAI API key:

        OPENAI_API_KEY=your_openai_api_key_here

4. **Run the Application:**
You can either open the index.html file directly in your web browser or run the application using a local server:

        npm start

## Usage
- Open the application in your web browser.
- Enter a movie title in the designated input field.
- Select an art style from the available options.
- Click the "Generate Poster" button to create your custom movie poster.
- The application will display the AI-generated movie poster based on your inputs.

## Example Code
Here's an example of the asynchronous JavaScript function used to handle the API call:

    async function generatePoster(movieTitle, artStyle) {
        try {
            const response = await fetch('https://api.openai.com/v1/images/generations', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: `Create a poster for the movie "${movieTitle}" in the style of "${artStyle}".`,
                    n: 1,
                    size: '1024x1024'
                })
            });

            const data = await response.json();
            return data.data[0].url;
        } catch (error) {
            console.error('Error generating poster:', error);
            return null;
        }
    }

This function makes an API call to the OpenAI DALL-E 3 API, requesting an image based on the provided movie title and art style.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.



