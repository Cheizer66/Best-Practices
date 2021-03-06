"use strict";

const formsA = [
  ["Moreel beraad", "Verantwoordelijkheid", "Deskundigheid", "vraag1A", "antwoord1A"],
  ["Moreel beraad", "Verantwoordelijkheid", "Deskundigheid", "vraag1B", "antwoord1B"],
  ["Moreel beraad", "Verantwoordelijkheid", "Deskundigheid", "vraag1C", "antwoord1C"],
  ["Moreel beraad", "Verantwoordelijkheid", "Deskundigheid", "vraag1D", "antwoord1D"],
  ["Moreel beraad", "Verantwoordelijkheid", "Deskundigheid", "vraag1E", "antwoord1E"],
  ["Moreel beraad", "Verantwoordelijkheid", "Deskundigheid", "vraag1F", "antwoord1F"],

  ["Moreel beraad", "Verantwoordelijkheid", "Te veel", "vraag2A", "antwoord2A"],
  ["Moreel beraad", "Verantwoordelijkheid", "Te veel", "vraag2B", "antwoord2B"],
  ["Moreel beraad", "Verantwoordelijkheid", "Te veel", "vraag2C", "antwoord2C"],
  ["Moreel beraad", "Verantwoordelijkheid", "Te veel", "vraag2D", "antwoord2D"],
  ["Moreel beraad", "Verantwoordelijkheid", "Te veel", "vraag2E", "antwoord2E"],
  ["Moreel beraad", "Verantwoordelijkheid", "Te veel", "vraag2F", "antwoord2F"],

  ["Moreel beraad", "Verantwoordelijkheid", "Te zwaar", "vraag3A", "antwoord3A"],
  ["Moreel beraad", "Verantwoordelijkheid", "Te zwaar", "vraag3B", "antwoord3B"],
  ["Moreel beraad", "Verantwoordelijkheid", "Te zwaar", "vraag3C", "antwoord3C"],
  ["Moreel beraad", "Verantwoordelijkheid", "Te zwaar", "vraag3D", "antwoord3D"],
  ["Moreel beraad", "Verantwoordelijkheid", "Te zwaar", "vraag3E", "antwoord3E"],
  ["Moreel beraad", "Verantwoordelijkheid", "Te zwaar", "vraag3F", "antwoord3F"],

  ["Moreel beraad", "Verantwoordelijkheid", "Onduidelijkheid", "vraag4A", "antwoord4A"],
  ["Moreel beraad", "Verantwoordelijkheid", "Onduidelijkheid", "vraag4B", "antwoord4B"],
  ["Moreel beraad", "Verantwoordelijkheid", "Onduidelijkheid", "vraag4C", "antwoord4C"],
  ["Moreel beraad", "Verantwoordelijkheid", "Onduidelijkheid", "vraag4D", "antwoord4D"],
  ["Moreel beraad", "Verantwoordelijkheid", "Onduidelijkheid", "vraag4E", "antwoord4E"],
  ["Moreel beraad", "Verantwoordelijkheid", "Onduidelijkheid", "vraag4F", "antwoord4F"],

  ["Moreel beraad", "Verantwoordelijkheid", "Ondergekwalificeerd", "vraag5A", "antwoord5A"],
  ["Moreel beraad", "Verantwoordelijkheid", "Ondergekwalificeerd", "vraag5B", "antwoord5B"],
  ["Moreel beraad", "Verantwoordelijkheid", "Ondergekwalificeerd", "vraag5C", "antwoord5C"],
  ["Moreel beraad", "Verantwoordelijkheid", "Ondergekwalificeerd", "vraag5D", "antwoord5D"],
  ["Moreel beraad", "Verantwoordelijkheid", "Ondergekwalificeerd", "vraag5E", "antwoord5E"],
  ["Moreel beraad", "Verantwoordelijkheid", "Ondergekwalificeerd", "vraag5F", "antwoord5F"],

  ["Moreel beraad", "Verantwoordelijkheid", "Overgekwalificeerd", "vraag6A", "antwoord6A"],
  ["Moreel beraad", "Verantwoordelijkheid", "Overgekwalificeerd", "vraag6B", "antwoord6B"],
  ["Moreel beraad", "Verantwoordelijkheid", "Overgekwalificeerd", "vraag6C", "antwoord6C"],
  ["Moreel beraad", "Verantwoordelijkheid", "Overgekwalificeerd", "vraag6D", "antwoord6D"],
  ["Moreel beraad", "Verantwoordelijkheid", "Overgekwalificeerd", "vraag6E", "antwoord6E"],
  ["Moreel beraad", "Verantwoordelijkheid", "Overgekwalificeerd", "vraag6F", "antwoord6F"],

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  ["Moreel beraad", "Agressie", "Verbaal", "vraag1A", "antwoord1A"],
  ["Moreel beraad", "Agressie", "Verbaal", "vraag1B", "antwoord1B"],
  ["Moreel beraad", "Agressie", "Verbaal", "vraag1C", "antwoord1C"],
  ["Moreel beraad", "Agressie", "Verbaal", "vraag1D", "antwoord1D"],
  ["Moreel beraad", "Agressie", "Verbaal", "vraag1E", "antwoord1E"],
  ["Moreel beraad", "Agressie", "Verbaal", "vraag1F", "antwoord1F"],

  ["Moreel beraad", "Agressie", "Non-verbaal", "vraag2A", "antwoord2A"],
  ["Moreel beraad", "Agressie", "Non-verbaal", "vraag2B", "antwoord2B"],
  ["Moreel beraad", "Agressie", "Non-verbaal", "vraag2C", "antwoord2C"],
  ["Moreel beraad", "Agressie", "Non-verbaal", "vraag2D", "antwoord2D"],
  ["Moreel beraad", "Agressie", "Non-verbaal", "vraag2E", "antwoord2E"],
  ["Moreel beraad", "Agressie", "Non-verbaal", "vraag2F", "antwoord2F"],

  ["Moreel beraad", "Agressie", "Fysiek", "vraag3A", "antwoord3A"],
  ["Moreel beraad", "Agressie", "Fysiek", "vraag3B", "antwoord3B"],
  ["Moreel beraad", "Agressie", "Fysiek", "vraag3C", "antwoord3C"],
  ["Moreel beraad", "Agressie", "Fysiek", "vraag3D", "antwoord3D"],
  ["Moreel beraad", "Agressie", "Fysiek", "vraag3E", "antwoord3E"],
  ["Moreel beraad", "Agressie", "Fysiek", "vraag3F", "antwoord3F"],

  ["Moreel beraad", "Agressie", "Machtsmisbruik", "vraag4A", "antwoord4A"],
  ["Moreel beraad", "Agressie", "Machtsmisbruik", "vraag4B", "antwoord4B"],
  ["Moreel beraad", "Agressie", "Machtsmisbruik", "vraag4C", "antwoord4C"],
  ["Moreel beraad", "Agressie", "Machtsmisbruik", "vraag4D", "antwoord4D"],
  ["Moreel beraad", "Agressie", "Machtsmisbruik", "vraag4E", "antwoord4E"],
  ["Moreel beraad", "Agressie", "Machtsmisbruik", "vraag4F", "antwoord4F"],

  ["Moreel beraad", "Agressie", "Buiten werktijd", "vraag5A", "antwoord5A"],
  ["Moreel beraad", "Agressie", "Buiten werktijd", "vraag5B", "antwoord5B"],
  ["Moreel beraad", "Agressie", "Buiten werktijd", "vraag5C", "antwoord5C"],
  ["Moreel beraad", "Agressie", "Buiten werktijd", "vraag5D", "antwoord5D"],
  ["Moreel beraad", "Agressie", "Buiten werktijd", "vraag5E", "antwoord5E"],
  ["Moreel beraad", "Agressie", "Buiten werktijd", "vraag5F", "antwoord5F"],

  ["Moreel beraad", "Agressie", "Passief agressief", "vraag6A", "antwoord6A"],
  ["Moreel beraad", "Agressie", "Passief agressief", "vraag6B", "antwoord6B"],
  ["Moreel beraad", "Agressie", "Passief agressief", "vraag6C", "antwoord6C"],
  ["Moreel beraad", "Agressie", "Passief agressief", "vraag6D", "antwoord6D"],
  ["Moreel beraad", "Agressie", "Passief agressief", "vraag6E", "antwoord6E"],
  ["Moreel beraad", "Agressie", "Passief agressief", "vraag6F", "antwoord6F"],

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  ["Moreel beraad", "Verleiding", "Publieke middelen", "vraag1A", "antwoord1A"],
  ["Moreel beraad", "Verleiding", "Publieke middelen", "vraag1B", "antwoord1B"],
  ["Moreel beraad", "Verleiding", "Publieke middelen", "vraag1C", "antwoord1C"],
  ["Moreel beraad", "Verleiding", "Publieke middelen", "vraag1D", "antwoord1D"],
  ["Moreel beraad", "Verleiding", "Publieke middelen", "vraag1E", "antwoord1E"],
  ["Moreel beraad", "Verleiding", "Publieke middelen", "vraag1F", "antwoord1F"],

  ["Moreel beraad", "Verleiding", "Persoons gegevens", "vraag2A", "antwoord2A"],
  ["Moreel beraad", "Verleiding", "Persoons gegevens", "vraag2B", "antwoord2B"],
  ["Moreel beraad", "Verleiding", "Persoons gegevens", "vraag2C", "antwoord2C"],
  ["Moreel beraad", "Verleiding", "Persoons gegevens", "vraag2D", "antwoord2D"],
  ["Moreel beraad", "Verleiding", "Persoons gegevens", "vraag2E", "antwoord2E"],
  ["Moreel beraad", "Verleiding", "Persoons gegevens", "vraag2F", "antwoord2F"],

  ["Moreel beraad", "Verleiding", "Seksueel gedrag", "vraag3A", "antwoord3A"],
  ["Moreel beraad", "Verleiding", "Seksueel gedrag", "vraag3B", "antwoord3B"],
  ["Moreel beraad", "Verleiding", "Seksueel gedrag", "vraag3C", "antwoord3C"],
  ["Moreel beraad", "Verleiding", "Seksueel gedrag", "vraag3D", "antwoord3D"],
  ["Moreel beraad", "Verleiding", "Seksueel gedrag", "vraag3E", "antwoord3E"],
  ["Moreel beraad", "Verleiding", "Seksueel gedrag", "vraag3F", "antwoord3F"],

  ["Moreel beraad", "Verleiding", "Omkoping", "vraag4A", "antwoord4A"],
  ["Moreel beraad", "Verleiding", "Omkoping", "vraag4B", "antwoord4B"],
  ["Moreel beraad", "Verleiding", "Omkoping", "vraag4C", "antwoord4C"],
  ["Moreel beraad", "Verleiding", "Omkoping", "vraag4D", "antwoord4D"],
  ["Moreel beraad", "Verleiding", "Omkoping", "vraag4E", "antwoord4E"],
  ["Moreel beraad", "Verleiding", "Omkoping", "vraag4F", "antwoord4F"],

  ["Moreel beraad", "Verleiding", "Vrije tijd", "vraag5A", "antwoord5A"],
  ["Moreel beraad", "Verleiding", "Vrije tijd", "vraag5B", "antwoord5B"],
  ["Moreel beraad", "Verleiding", "Vrije tijd", "vraag5C", "antwoord5C"],
  ["Moreel beraad", "Verleiding", "Vrije tijd", "vraag5D", "antwoord5D"],
  ["Moreel beraad", "Verleiding", "Vrije tijd", "vraag5E", "antwoord5E"],
  ["Moreel beraad", "Verleiding", "Vrije tijd", "vraag5F", "antwoord5F"],

  ["Moreel beraad", "Verleiding", "Telefoon", "vraag6A", "antwoord6A"],
  ["Moreel beraad", "Verleiding", "Telefoon", "vraag6B", "antwoord6B"],
  ["Moreel beraad", "Verleiding", "Telefoon", "vraag6C", "antwoord6C"],
  ["Moreel beraad", "Verleiding", "Telefoon", "vraag6D", "antwoord6D"],
  ["Moreel beraad", "Verleiding", "Telefoon", "vraag6E", "antwoord6E"],
  ["Moreel beraad", "Verleiding", "Telefoon", "vraag6F", "antwoord6F"],

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  ["Moreel beraad", "Privacy", "Controle", "vraag1A", "antwoord1A"],
  ["Moreel beraad", "Privacy", "Controle", "vraag1B", "antwoord1B"],
  ["Moreel beraad", "Privacy", "Controle", "vraag1C", "antwoord1C"],
  ["Moreel beraad", "Privacy", "Controle", "vraag1D", "antwoord1D"],
  ["Moreel beraad", "Privacy", "Controle", "vraag1E", "antwoord1E"],
  ["Moreel beraad", "Privacy", "Controle", "vraag1F", "antwoord1F"],

  ["Moreel beraad", "Privacy", "Privé / werk", "vraag2A", "antwoord2A"],
  ["Moreel beraad", "Privacy", "Privé / werk", "vraag2B", "antwoord2B"],
  ["Moreel beraad", "Privacy", "Privé / werk", "vraag2C", "antwoord2C"],
  ["Moreel beraad", "Privacy", "Privé / werk", "vraag2D", "antwoord2D"],
  ["Moreel beraad", "Privacy", "Privé / werk", "vraag2E", "antwoord2E"],
  ["Moreel beraad", "Privacy", "Privé / werk", "vraag2F", "antwoord2F"],

  ["Moreel beraad", "Privacy", "Misbruik", "vraag3A", "antwoord3A"],
  ["Moreel beraad", "Privacy", "Misbruik", "vraag3B", "antwoord3B"],
  ["Moreel beraad", "Privacy", "Misbruik", "vraag3C", "antwoord3C"],
  ["Moreel beraad", "Privacy", "Misbruik", "vraag3D", "antwoord3D"],
  ["Moreel beraad", "Privacy", "Misbruik", "vraag3E", "antwoord3E"],
  ["Moreel beraad", "Privacy", "Misbruik", "vraag3F", "antwoord3F"],

  ["Moreel beraad", "Privacy", "Social Media", "vraag4A", "antwoord4A"],
  ["Moreel beraad", "Privacy", "Social Media", "vraag4B", "antwoord4B"],
  ["Moreel beraad", "Privacy", "Social Media", "vraag4C", "antwoord4C"],
  ["Moreel beraad", "Privacy", "Social Media", "vraag4D", "antwoord4D"],
  ["Moreel beraad", "Privacy", "Social Media", "vraag4E", "antwoord4E"],
  ["Moreel beraad", "Privacy", "Social Media", "vraag4F", "antwoord4F"],

  ["Moreel beraad", "Privacy", "Geheimen", "vraag5A", "antwoord5A"],
  ["Moreel beraad", "Privacy", "Geheimen", "vraag5B", "antwoord5B"],
  ["Moreel beraad", "Privacy", "Geheimen", "vraag5C", "antwoord5C"],
  ["Moreel beraad", "Privacy", "Geheimen", "vraag5D", "antwoord5D"],
  ["Moreel beraad", "Privacy", "Geheimen", "vraag5E", "antwoord5E"],
  ["Moreel beraad", "Privacy", "Geheimen", "vraag5F", "antwoord5F"],

  ["Moreel beraad", "Privacy", "Data", "vraag6A", "antwoord6A"],
  ["Moreel beraad", "Privacy", "Data", "vraag6B", "antwoord6B"],
  ["Moreel beraad", "Privacy", "Data", "vraag6C", "antwoord6C"],
  ["Moreel beraad", "Privacy", "Data", "vraag6D", "antwoord6D"],
  ["Moreel beraad", "Privacy", "Data", "vraag6E", "antwoord6E"],
  ["Moreel beraad", "Privacy", "Data", "vraag6F", "antwoord6F"],

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  ["Moreel beraad", "Huisregels", "Uitzonderingen", "vraag1A", "antwoord1A"],
  ["Moreel beraad", "Huisregels", "Uitzonderingen", "vraag1B", "antwoord1B"],
  ["Moreel beraad", "Huisregels", "Uitzonderingen", "vraag1C", "antwoord1C"],
  ["Moreel beraad", "Huisregels", "Uitzonderingen", "vraag1D", "antwoord1D"],
  ["Moreel beraad", "Huisregels", "Uitzonderingen", "vraag1E", "antwoord1E"],
  ["Moreel beraad", "Huisregels", "Uitzonderingen", "vraag1F", "antwoord1F"],

  ["Moreel beraad", "Huisregels", "Te streng", "vraag2A", "antwoord2A"],
  ["Moreel beraad", "Huisregels", "Te streng", "vraag2B", "antwoord2B"],
  ["Moreel beraad", "Huisregels", "Te streng", "vraag2C", "antwoord2C"],
  ["Moreel beraad", "Huisregels", "Te streng", "vraag2D", "antwoord2D"],
  ["Moreel beraad", "Huisregels", "Te streng", "vraag2E", "antwoord2E"],
  ["Moreel beraad", "Huisregels", "Te streng", "vraag2F", "antwoord2F"],

  ["Moreel beraad", "Huisregels", "Nalatigheid", "vraag3A", "antwoord3A"],
  ["Moreel beraad", "Huisregels", "Nalatigheid", "vraag3B", "antwoord3B"],
  ["Moreel beraad", "Huisregels", "Nalatigheid", "vraag3C", "antwoord3C"],
  ["Moreel beraad", "Huisregels", "Nalatigheid", "vraag3D", "antwoord3D"],
  ["Moreel beraad", "Huisregels", "Nalatigheid", "vraag3E", "antwoord3E"],
  ["Moreel beraad", "Huisregels", "Nalatigheid", "vraag3F", "antwoord3F"],

  ["Moreel beraad", "Huisregels", "Onduidelijkheid", "vraag4A", "antwoord4A"],
  ["Moreel beraad", "Huisregels", "Onduidelijkheid", "vraag4B", "antwoord4B"],
  ["Moreel beraad", "Huisregels", "Onduidelijkheid", "vraag4C", "antwoord4C"],
  ["Moreel beraad", "Huisregels", "Onduidelijkheid", "vraag4D", "antwoord4D"],
  ["Moreel beraad", "Huisregels", "Onduidelijkheid", "vraag4E", "antwoord4E"],
  ["Moreel beraad", "Huisregels", "Onduidelijkheid", "vraag4F", "antwoord4F"],

  ["Moreel beraad", "Huisregels", "Naleving", "vraag5A", "antwoord5A"],
  ["Moreel beraad", "Huisregels", "Naleving", "vraag5B", "antwoord5B"],
  ["Moreel beraad", "Huisregels", "Naleving", "vraag5C", "antwoord5C"],
  ["Moreel beraad", "Huisregels", "Naleving", "vraag5D", "antwoord5D"],
  ["Moreel beraad", "Huisregels", "Naleving", "vraag5E", "antwoord5E"],
  ["Moreel beraad", "Huisregels", "Naleving", "vraag5F", "antwoord5F"],

  ["Moreel beraad", "Huisregels", "Vrije ruimte", "vraag6A", "antwoord6A"],
  ["Moreel beraad", "Huisregels", "Vrije ruimte", "vraag6B", "antwoord6B"],
  ["Moreel beraad", "Huisregels", "Vrije ruimte", "vraag6C", "antwoord6C"],
  ["Moreel beraad", "Huisregels", "Vrije ruimte", "vraag6D", "antwoord6D"],
  ["Moreel beraad", "Huisregels", "Vrije ruimte", "vraag6E", "antwoord6E"],
  ["Moreel beraad", "Huisregels", "Vrije ruimte", "vraag6F", "antwoord6F"],

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  ["Moreel beraad", "Collega's", "Chantage", "vraag1A", "antwoord1A"],
  ["Moreel beraad", "Collega's", "Chantage", "vraag1B", "antwoord1B"],
  ["Moreel beraad", "Collega's", "Chantage", "vraag1C", "antwoord1C"],
  ["Moreel beraad", "Collega's", "Chantage", "vraag1D", "antwoord1D"],
  ["Moreel beraad", "Collega's", "Chantage", "vraag1E", "antwoord1E"],
  ["Moreel beraad", "Collega's", "Chantage", "vraag1F", "antwoord1F"],

  ["Moreel beraad", "Collega's", "Roddelen", "vraag2A", "antwoord2A"],
  ["Moreel beraad", "Collega's", "Roddelen", "vraag2B", "antwoord2B"],
  ["Moreel beraad", "Collega's", "Roddelen", "vraag2C", "antwoord2C"],
  ["Moreel beraad", "Collega's", "Roddelen", "vraag2D", "antwoord2D"],
  ["Moreel beraad", "Collega's", "Roddelen", "vraag2E", "antwoord2E"],
  ["Moreel beraad", "Collega's", "Roddelen", "vraag2F", "antwoord2F"],

  ["Moreel beraad", "Collega's", "Relatie", "vraag3A", "antwoord3A"],
  ["Moreel beraad", "Collega's", "Relatie", "vraag3B", "antwoord3B"],
  ["Moreel beraad", "Collega's", "Relatie", "vraag3C", "antwoord3C"],
  ["Moreel beraad", "Collega's", "Relatie", "vraag3D", "antwoord3D"],
  ["Moreel beraad", "Collega's", "Relatie", "vraag3E", "antwoord3E"],
  ["Moreel beraad", "Collega's", "Relatie", "vraag3F", "antwoord3F"],

  ["Moreel beraad", "Collega's", "Machtsmisbruik", "vraag4A", "antwoord4A"],
  ["Moreel beraad", "Collega's", "Machtsmisbruik", "vraag4B", "antwoord4B"],
  ["Moreel beraad", "Collega's", "Machtsmisbruik", "vraag4C", "antwoord4C"],
  ["Moreel beraad", "Collega's", "Machtsmisbruik", "vraag4D", "antwoord4D"],
  ["Moreel beraad", "Collega's", "Machtsmisbruik", "vraag4E", "antwoord4E"],
  ["Moreel beraad", "Collega's", "Machtsmisbruik", "vraag4F", "antwoord4F"],

  ["Moreel beraad", "Collega's", "Ondergewardeerd", "vraag5A", "antwoord5A"],
  ["Moreel beraad", "Collega's", "Ondergewardeerd", "vraag5B", "antwoord5B"],
  ["Moreel beraad", "Collega's", "Ondergewardeerd", "vraag5C", "antwoord5C"],
  ["Moreel beraad", "Collega's", "Ondergewardeerd", "vraag5D", "antwoord5D"],
  ["Moreel beraad", "Collega's", "Ondergewardeerd", "vraag5E", "antwoord5E"],
  ["Moreel beraad", "Collega's", "Ondergewardeerd", "vraag5F", "antwoord5F"],

  ["Moreel beraad", "Collega's", "Werk uitjes", "vraag6A", "antwoord6A"],
  ["Moreel beraad", "Collega's", "Werk uitjes", "vraag6B", "antwoord6B"],
  ["Moreel beraad", "Collega's", "Werk uitjes", "vraag6C", "antwoord6C"],
  ["Moreel beraad", "Collega's", "Werk uitjes", "vraag6D", "antwoord6D"],
  ["Moreel beraad", "Collega's", "Werk uitjes", "vraag6E", "antwoord6E"],
  ["Moreel beraad", "Collega's", "Werk uitjes", "vraag6F", "antwoord6F"],
];
