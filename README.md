# Coding Challenge

**Aufgabe**
1. Berechnung des Customerscores basierend auf den folgenden Regeln und dem gegebenen Request Parametern.
2. Bei jeder Berechnung soll der errechnete Score für den Customer abgespeichert werden.

*Request Parameter:*
```json
{
  "customerId": "4c2c0d27-80bc-45b5-beb9-dbf0745e19ae"
}
```

*Score Berechnung:*

Es gibt unterschiedliche Methoden den CustomerScore zu berechnen. Diese hängen vom Typ des Customer ab:

**B2C:**

* Formel: Grundscore + Anzahl abgeschlosse Orders * PaymentScore
* Grundscore: 50

**B2B:**
* Formel: Grundscore + Anzahl abgeschlosse Orders * PaymentScore + Anzahl Jahre Mitgliedschaft
* Grundscore: 64

**Landlord:**
* Formel: Grundscore
* Grundscore: 55 + Anzahl abgeschlosse Orders * PaymentScore + Anzahl Mieteinheiten


Die benötigten Daten zu Customer, Order(s) und Payment sind in separaten Datenbanken abgespeichert.
