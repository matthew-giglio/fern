// Code generated by Fern. DO NOT EDIT.

package api

import (
	json "encoding/json"
	fmt "fmt"
	internal "github.com/simple-fhir/fern/internal"
)

type Memo struct {
	Description string   `json:"description" url:"description"`
	Account     *Account `json:"account,omitempty" url:"account,omitempty"`

	extraProperties map[string]any
	rawJSON         json.RawMessage
}

func (m *Memo) GetDescription() string {
	if m == nil {
		return ""
	}
	return m.Description
}

func (m *Memo) GetAccount() *Account {
	if m == nil {
		return nil
	}
	return m.Account
}

func (m *Memo) GetExtraProperties() map[string]any {
	if m == nil {
		return nil
	}
	return m.extraProperties
}

func (m *Memo) UnmarshalJSON(
	data []byte,
) error {
	type unmarshaler Memo
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*m = Memo(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *m)
	if err != nil {
		return err
	}
	m.extraProperties = extraProperties
	m.rawJSON = json.RawMessage(data)
	return nil
}

func (m *Memo) String() string {
	if len(m.rawJSON) > 0 {
		if value, err := internal.StringifyJSON(m.rawJSON); err == nil {
			return value
		}
	}
	if value, err := internal.StringifyJSON(m); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", m)
}

type BaseResource struct {
	Id               string          `json:"id" url:"id"`
	RelatedResources []*ResourceList `json:"related_resources" url:"related_resources"`
	Memo             *Memo           `json:"memo" url:"memo"`

	extraProperties map[string]any
	rawJSON         json.RawMessage
}

func (b *BaseResource) GetId() string {
	if b == nil {
		return ""
	}
	return b.Id
}

func (b *BaseResource) GetRelatedResources() []*ResourceList {
	if b == nil {
		return nil
	}
	return b.RelatedResources
}

func (b *BaseResource) GetMemo() *Memo {
	if b == nil {
		return nil
	}
	return b.Memo
}

func (b *BaseResource) GetExtraProperties() map[string]any {
	if b == nil {
		return nil
	}
	return b.extraProperties
}

func (b *BaseResource) UnmarshalJSON(
	data []byte,
) error {
	type unmarshaler BaseResource
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*b = BaseResource(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *b)
	if err != nil {
		return err
	}
	b.extraProperties = extraProperties
	b.rawJSON = json.RawMessage(data)
	return nil
}

func (b *BaseResource) String() string {
	if len(b.rawJSON) > 0 {
		if value, err := internal.StringifyJSON(b.rawJSON); err == nil {
			return value
		}
	}
	if value, err := internal.StringifyJSON(b); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", b)
}

type ResourceList struct {
	Account      *Account
	Patient      *Patient
	Practitioner *Practitioner
	Script       *Script
}

type Account struct {
	Id               string          `json:"id" url:"id"`
	RelatedResources []*ResourceList `json:"related_resources" url:"related_resources"`
	Memo             *Memo           `json:"memo" url:"memo"`
	Name             string          `json:"name" url:"name"`
	Patient          *Patient        `json:"patient,omitempty" url:"patient,omitempty"`
	Practitioner     *Practitioner   `json:"practitioner,omitempty" url:"practitioner,omitempty"`

	resourceType    string
	extraProperties map[string]any
	rawJSON         json.RawMessage
}

func (a *Account) GetId() string {
	if a == nil {
		return ""
	}
	return a.Id
}

func (a *Account) GetRelatedResources() []*ResourceList {
	if a == nil {
		return nil
	}
	return a.RelatedResources
}

func (a *Account) GetMemo() *Memo {
	if a == nil {
		return nil
	}
	return a.Memo
}

func (a *Account) GetResourceType() string {
	if a == nil {
		return ""
	}
	return a.resourceType
}

func (a *Account) GetName() string {
	if a == nil {
		return ""
	}
	return a.Name
}

func (a *Account) GetPatient() *Patient {
	if a == nil {
		return nil
	}
	return a.Patient
}

func (a *Account) GetPractitioner() *Practitioner {
	if a == nil {
		return nil
	}
	return a.Practitioner
}

func (a *Account) GetExtraProperties() map[string]any {
	if a == nil {
		return nil
	}
	return a.extraProperties
}

func (a *Account) UnmarshalJSON(
	data []byte,
) error {
	type embed Account
	var unmarshaler = struct {
		embed
		ResourceType string `json:"resource_type"`
	}{
		embed: embed(*a),
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	*a = Account(unmarshaler.embed)
	if unmarshaler.ResourceType != "Account" {
		return fmt.Errorf("unexpected value for literal on type %T; expected %v got %v", a, "Account", unmarshaler.ResourceType)
	}
	a.resourceType = unmarshaler.ResourceType
	extraProperties, err := internal.ExtractExtraProperties(data, *a, "resourceType")
	if err != nil {
		return err
	}
	a.extraProperties = extraProperties
	a.rawJSON = json.RawMessage(data)
	return nil
}

func (a *Account) MarshalJSON() ([]byte, error) {
	type embed Account
	var marshaler = struct {
		embed
		ResourceType string `json:"resource_type"`
	}{
		embed:        embed(*a),
		ResourceType: "Account",
	}
	return json.Marshal(marshaler)
}

func (a *Account) String() string {
	if len(a.rawJSON) > 0 {
		if value, err := internal.StringifyJSON(a.rawJSON); err == nil {
			return value
		}
	}
	if value, err := internal.StringifyJSON(a); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", a)
}

type Patient struct {
	Id               string          `json:"id" url:"id"`
	RelatedResources []*ResourceList `json:"related_resources" url:"related_resources"`
	Memo             *Memo           `json:"memo" url:"memo"`
	Name             string          `json:"name" url:"name"`
	Scripts          []*Script       `json:"scripts" url:"scripts"`

	resourceType    string
	extraProperties map[string]any
	rawJSON         json.RawMessage
}

func (p *Patient) GetId() string {
	if p == nil {
		return ""
	}
	return p.Id
}

func (p *Patient) GetRelatedResources() []*ResourceList {
	if p == nil {
		return nil
	}
	return p.RelatedResources
}

func (p *Patient) GetMemo() *Memo {
	if p == nil {
		return nil
	}
	return p.Memo
}

func (p *Patient) GetResourceType() string {
	if p == nil {
		return ""
	}
	return p.resourceType
}

func (p *Patient) GetName() string {
	if p == nil {
		return ""
	}
	return p.Name
}

func (p *Patient) GetScripts() []*Script {
	if p == nil {
		return nil
	}
	return p.Scripts
}

func (p *Patient) GetExtraProperties() map[string]any {
	if p == nil {
		return nil
	}
	return p.extraProperties
}

func (p *Patient) UnmarshalJSON(
	data []byte,
) error {
	type embed Patient
	var unmarshaler = struct {
		embed
		ResourceType string `json:"resource_type"`
	}{
		embed: embed(*p),
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	*p = Patient(unmarshaler.embed)
	if unmarshaler.ResourceType != "Patient" {
		return fmt.Errorf("unexpected value for literal on type %T; expected %v got %v", p, "Patient", unmarshaler.ResourceType)
	}
	p.resourceType = unmarshaler.ResourceType
	extraProperties, err := internal.ExtractExtraProperties(data, *p, "resourceType")
	if err != nil {
		return err
	}
	p.extraProperties = extraProperties
	p.rawJSON = json.RawMessage(data)
	return nil
}

func (p *Patient) MarshalJSON() ([]byte, error) {
	type embed Patient
	var marshaler = struct {
		embed
		ResourceType string `json:"resource_type"`
	}{
		embed:        embed(*p),
		ResourceType: "Patient",
	}
	return json.Marshal(marshaler)
}

func (p *Patient) String() string {
	if len(p.rawJSON) > 0 {
		if value, err := internal.StringifyJSON(p.rawJSON); err == nil {
			return value
		}
	}
	if value, err := internal.StringifyJSON(p); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", p)
}

type Practitioner struct {
	Id               string          `json:"id" url:"id"`
	RelatedResources []*ResourceList `json:"related_resources" url:"related_resources"`
	Memo             *Memo           `json:"memo" url:"memo"`
	Name             string          `json:"name" url:"name"`

	resourceType    string
	extraProperties map[string]any
	rawJSON         json.RawMessage
}

func (p *Practitioner) GetId() string {
	if p == nil {
		return ""
	}
	return p.Id
}

func (p *Practitioner) GetRelatedResources() []*ResourceList {
	if p == nil {
		return nil
	}
	return p.RelatedResources
}

func (p *Practitioner) GetMemo() *Memo {
	if p == nil {
		return nil
	}
	return p.Memo
}

func (p *Practitioner) GetResourceType() string {
	if p == nil {
		return ""
	}
	return p.resourceType
}

func (p *Practitioner) GetName() string {
	if p == nil {
		return ""
	}
	return p.Name
}

func (p *Practitioner) GetExtraProperties() map[string]any {
	if p == nil {
		return nil
	}
	return p.extraProperties
}

func (p *Practitioner) UnmarshalJSON(
	data []byte,
) error {
	type embed Practitioner
	var unmarshaler = struct {
		embed
		ResourceType string `json:"resource_type"`
	}{
		embed: embed(*p),
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	*p = Practitioner(unmarshaler.embed)
	if unmarshaler.ResourceType != "Practitioner" {
		return fmt.Errorf("unexpected value for literal on type %T; expected %v got %v", p, "Practitioner", unmarshaler.ResourceType)
	}
	p.resourceType = unmarshaler.ResourceType
	extraProperties, err := internal.ExtractExtraProperties(data, *p, "resourceType")
	if err != nil {
		return err
	}
	p.extraProperties = extraProperties
	p.rawJSON = json.RawMessage(data)
	return nil
}

func (p *Practitioner) MarshalJSON() ([]byte, error) {
	type embed Practitioner
	var marshaler = struct {
		embed
		ResourceType string `json:"resource_type"`
	}{
		embed:        embed(*p),
		ResourceType: "Practitioner",
	}
	return json.Marshal(marshaler)
}

func (p *Practitioner) String() string {
	if len(p.rawJSON) > 0 {
		if value, err := internal.StringifyJSON(p.rawJSON); err == nil {
			return value
		}
	}
	if value, err := internal.StringifyJSON(p); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", p)
}

type Script struct {
	Id               string          `json:"id" url:"id"`
	RelatedResources []*ResourceList `json:"related_resources" url:"related_resources"`
	Memo             *Memo           `json:"memo" url:"memo"`
	Name             string          `json:"name" url:"name"`

	resourceType    string
	extraProperties map[string]any
	rawJSON         json.RawMessage
}

func (s *Script) GetId() string {
	if s == nil {
		return ""
	}
	return s.Id
}

func (s *Script) GetRelatedResources() []*ResourceList {
	if s == nil {
		return nil
	}
	return s.RelatedResources
}

func (s *Script) GetMemo() *Memo {
	if s == nil {
		return nil
	}
	return s.Memo
}

func (s *Script) GetResourceType() string {
	if s == nil {
		return ""
	}
	return s.resourceType
}

func (s *Script) GetName() string {
	if s == nil {
		return ""
	}
	return s.Name
}

func (s *Script) GetExtraProperties() map[string]any {
	if s == nil {
		return nil
	}
	return s.extraProperties
}

func (s *Script) UnmarshalJSON(
	data []byte,
) error {
	type embed Script
	var unmarshaler = struct {
		embed
		ResourceType string `json:"resource_type"`
	}{
		embed: embed(*s),
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	*s = Script(unmarshaler.embed)
	if unmarshaler.ResourceType != "Script" {
		return fmt.Errorf("unexpected value for literal on type %T; expected %v got %v", s, "Script", unmarshaler.ResourceType)
	}
	s.resourceType = unmarshaler.ResourceType
	extraProperties, err := internal.ExtractExtraProperties(data, *s, "resourceType")
	if err != nil {
		return err
	}
	s.extraProperties = extraProperties
	s.rawJSON = json.RawMessage(data)
	return nil
}

func (s *Script) MarshalJSON() ([]byte, error) {
	type embed Script
	var marshaler = struct {
		embed
		ResourceType string `json:"resource_type"`
	}{
		embed:        embed(*s),
		ResourceType: "Script",
	}
	return json.Marshal(marshaler)
}

func (s *Script) String() string {
	if len(s.rawJSON) > 0 {
		if value, err := internal.StringifyJSON(s.rawJSON); err == nil {
			return value
		}
	}
	if value, err := internal.StringifyJSON(s); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", s)
}
