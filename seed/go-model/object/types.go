// Code generated by Fern. DO NOT EDIT.

package object

import (
	json "encoding/json"
	fmt "fmt"
	uuid "github.com/google/uuid"
	internal "github.com/object/fern/internal"
	time "time"
)

// Exercises all of the built-in types.
type Type struct {
	One         int              `json:"one" url:"one"`
	Two         float64          `json:"two" url:"two"`
	Three       string           `json:"three" url:"three"`
	Four        bool             `json:"four" url:"four"`
	Five        int64            `json:"five" url:"five"`
	Six         time.Time        `json:"six" url:"six"`
	Seven       time.Time        `json:"seven" url:"seven"`
	Eight       uuid.UUID        `json:"eight" url:"eight"`
	Nine        []byte           `json:"nine" url:"nine"`
	Ten         []int            `json:"ten" url:"ten"`
	Eleven      []float64        `json:"eleven" url:"eleven"`
	Twelve      map[string]bool  `json:"twelve" url:"twelve"`
	Thirteen    *int64           `json:"thirteen,omitempty" url:"thirteen,omitempty"`
	Fourteen    any              `json:"fourteen" url:"fourteen"`
	Fifteen     [][]int          `json:"fifteen" url:"fifteen"`
	Sixteen     []map[string]int `json:"sixteen" url:"sixteen"`
	Seventeen   []*uuid.UUID     `json:"seventeen" url:"seventeen"`
	Nineteen    *Name            `json:"nineteen" url:"nineteen"`
	Twenty      int              `json:"twenty" url:"twenty"`
	Twentyone   int64            `json:"twentyone" url:"twentyone"`
	Twentytwo   float64          `json:"twentytwo" url:"twentytwo"`
	Twentythree string           `json:"twentythree" url:"twentythree"`
	Twentyfour  *time.Time       `json:"twentyfour,omitempty" url:"twentyfour,omitempty"`
	Twentyfive  *time.Time       `json:"twentyfive,omitempty" url:"twentyfive,omitempty"`

	eighteen        string
	extraProperties map[string]any
	rawJSON         json.RawMessage
}

func (t *Type) GetOne() int {
	if t == nil {
		return 0
	}
	return t.One
}

func (t *Type) GetTwo() float64 {
	if t == nil {
		return 0
	}
	return t.Two
}

func (t *Type) GetThree() string {
	if t == nil {
		return ""
	}
	return t.Three
}

func (t *Type) GetFour() bool {
	if t == nil {
		return false
	}
	return t.Four
}

func (t *Type) GetFive() int64 {
	if t == nil {
		return 0
	}
	return t.Five
}

func (t *Type) GetSix() time.Time {
	if t == nil {
		return time.Time{}
	}
	return t.Six
}

func (t *Type) GetSeven() time.Time {
	if t == nil {
		return time.Time{}
	}
	return t.Seven
}

func (t *Type) GetEight() uuid.UUID {
	if t == nil {
		return uuid.UUID{}
	}
	return t.Eight
}

func (t *Type) GetNine() []byte {
	if t == nil {
		return nil
	}
	return t.Nine
}

func (t *Type) GetTen() []int {
	if t == nil {
		return nil
	}
	return t.Ten
}

func (t *Type) GetEleven() []float64 {
	if t == nil {
		return nil
	}
	return t.Eleven
}

func (t *Type) GetTwelve() map[string]bool {
	if t == nil {
		return nil
	}
	return t.Twelve
}

func (t *Type) GetThirteen() *int64 {
	if t == nil {
		return nil
	}
	return t.Thirteen
}

func (t *Type) GetFourteen() any {
	if t == nil {
		return nil
	}
	return t.Fourteen
}

func (t *Type) GetFifteen() [][]int {
	if t == nil {
		return nil
	}
	return t.Fifteen
}

func (t *Type) GetSixteen() []map[string]int {
	if t == nil {
		return nil
	}
	return t.Sixteen
}

func (t *Type) GetSeventeen() []*uuid.UUID {
	if t == nil {
		return nil
	}
	return t.Seventeen
}

func (t *Type) GetEighteen() string {
	if t == nil {
		return ""
	}
	return t.eighteen
}

func (t *Type) GetNineteen() *Name {
	if t == nil {
		return nil
	}
	return t.Nineteen
}

func (t *Type) GetTwenty() int {
	if t == nil {
		return 0
	}
	return t.Twenty
}

func (t *Type) GetTwentyone() int64 {
	if t == nil {
		return 0
	}
	return t.Twentyone
}

func (t *Type) GetTwentytwo() float64 {
	if t == nil {
		return 0
	}
	return t.Twentytwo
}

func (t *Type) GetTwentythree() string {
	if t == nil {
		return ""
	}
	return t.Twentythree
}

func (t *Type) GetTwentyfour() *time.Time {
	if t == nil {
		return nil
	}
	return t.Twentyfour
}

func (t *Type) GetTwentyfive() *time.Time {
	if t == nil {
		return nil
	}
	return t.Twentyfive
}

func (t *Type) GetExtraProperties() map[string]any {
	if t == nil {
		return nil
	}
	return t.extraProperties
}

func (t *Type) UnmarshalJSON(
	data []byte,
) error {
	type embed Type
	var unmarshaler = struct {
		embed
		Six        *internal.DateTime `json:"six"`
		Seven      *internal.Date     `json:"seven"`
		Eighteen   string             `json:"eighteen"`
		Twentyfour *internal.DateTime `json:"twentyfour"`
		Twentyfive *internal.Date     `json:"twentyfive"`
	}{
		embed: embed(*t),
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	*t = Type(unmarshaler.embed)
	t.Six = unmarshaler.Six.Time()
	t.Seven = unmarshaler.Seven.Time()
	if unmarshaler.Eighteen != "eighteen" {
		return fmt.Errorf("unexpected value for literal on type %T; expected %v got %v", t, "eighteen", unmarshaler.Eighteen)
	}
	t.eighteen = unmarshaler.Eighteen
	t.Twentyfour = unmarshaler.Twentyfour.TimePtr()
	t.Twentyfive = unmarshaler.Twentyfive.TimePtr()
	extraProperties, err := internal.ExtractExtraProperties(data, *t, "eighteen")
	if err != nil {
		return err
	}
	t.extraProperties = extraProperties
	t.rawJSON = json.RawMessage(data)
	return nil
}

func (t *Type) MarshalJSON() ([]byte, error) {
	type embed Type
	var marshaler = struct {
		embed
		Six        *internal.DateTime `json:"six"`
		Seven      *internal.Date     `json:"seven"`
		Eighteen   string             `json:"eighteen"`
		Twentyfour *internal.DateTime `json:"twentyfour"`
		Twentyfive *internal.Date     `json:"twentyfive"`
	}{
		embed:      embed(*t),
		Six:        internal.NewDateTime(t.Six),
		Seven:      internal.NewDate(t.Seven),
		Eighteen:   "eighteen",
		Twentyfour: internal.NewOptionalDateTime(t.Twentyfour),
		Twentyfive: internal.NewOptionalDate(t.Twentyfive),
	}
	return json.Marshal(marshaler)
}

func (t *Type) String() string {
	if len(t.rawJSON) > 0 {
		if value, err := internal.StringifyJSON(t.rawJSON); err == nil {
			return value
		}
	}
	if value, err := internal.StringifyJSON(t); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", t)
}

type Name struct {
	Id    string `json:"id" url:"id"`
	Value string `json:"value" url:"value"`

	extraProperties map[string]any
	rawJSON         json.RawMessage
}

func (n *Name) GetId() string {
	if n == nil {
		return ""
	}
	return n.Id
}

func (n *Name) GetValue() string {
	if n == nil {
		return ""
	}
	return n.Value
}

func (n *Name) GetExtraProperties() map[string]any {
	if n == nil {
		return nil
	}
	return n.extraProperties
}

func (n *Name) UnmarshalJSON(
	data []byte,
) error {
	type unmarshaler Name
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*n = Name(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *n)
	if err != nil {
		return err
	}
	n.extraProperties = extraProperties
	n.rawJSON = json.RawMessage(data)
	return nil
}

func (n *Name) String() string {
	if len(n.rawJSON) > 0 {
		if value, err := internal.StringifyJSON(n.rawJSON); err == nil {
			return value
		}
	}
	if value, err := internal.StringifyJSON(n); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", n)
}
