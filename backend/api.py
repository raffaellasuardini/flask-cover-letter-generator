import os
import openai
from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS


app = Flask(__name__)
api = Api(app)
CORS(app, resources={r"/api/letter": {"origins": "http://localhost:3000"}})

openai.api_key = os.getenv("OPENAI_API_KEY")
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')


def generate_prompt(j_description, cv):
    return """ Ciao Chatgpt! immagina di essere un consulente di carriera e aiutami a scrivere una lettera di presentazione per la seguente job description {} mentre queste sono le mie competenze {}. La struttura della lettera deve essere divisa in tre paragrafi del massimo 15-20 righe per ciascuno: il primo dove mi presenti e dici quello che ho studiato e le mie competenze principali. Il secondo paragrafo dove spieghi perché vorrei lavorare in quest'azienda. Il terzo dove ricordi perché mi considero in linea per la posizione. Infine concludi salutando e invita a guardare il cv in allegato.  """.format(j_description, cv)


def format_response(text):
    return text.split('\n\n')


class HelloCoverLetter(Resource):
    def get(self):
        return {'hello': 'world'}

    def post(self):
        j_description = request.json["job"]
        cv = request.json["cv"]
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo-16k-0613",
            messages=[
                {'role': 'user', 'content': generate_prompt(
                    j_description, cv), }
            ]
        )
        print(response)
        response_text = response.choices[0].message.content
        print(response_text)
        formatted_response = format_response(response_text)
        return {'paragraphs': formatted_response}


api.add_resource(HelloCoverLetter, '/api/letter')


if __name__ == '__main__':
    app.run(debug=True)
