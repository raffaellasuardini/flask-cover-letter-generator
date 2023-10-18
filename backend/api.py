import os
import openai
from flask import Flask, request
from flask_restful import Resource, Api
from flask_cors import CORS


app = Flask(__name__)
api = Api(app)
CORS(app)

openai.api_key = os.getenv("OPENAI_API_KEY")
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')


def generate_prompt(j_description, cv):
    return """ Ciao Chatgpt! immagina di essere un consulente di carriera e aiutami a scrivere una lettera di presentazione per la seguente job description {} mentre queste sono le mie competenze {}. La struttura della lettera deve essere divisa in tre paragrafi del massimo 15-20 righe per ciascuno: il primo dove mi presenti e dici quello che ho studiato e le mie competenze principali. Il secondo paragrafo dove spieghi perché vorrei lavorare in quest'azienda. Il terzo dove ricordi perché mi considero in linea per la posizione. Infine concludi salutando e invita a guardare il cv in allegato. Ritornami il risultato formattato come codice html utilizzando il tag <p> per dividere i paragrafi e il tag <br> per andare a capo """.format(j_description, cv)


class HelloCoverLetter(Resource):
    def get(self):
        return {'hello': 'world'}

    def post(self):
        j_description = request.json["job"]
        cv = request.json["cv"]
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {'role': 'user', 'content': generate_prompt(j_description, cv)}]
        )
        print(response.choices[0].message.content)
        return response.choices[0].message.content


api.add_resource(HelloCoverLetter, '/api/letter')


if __name__ == '__main__':
    app.run(debug=True)
